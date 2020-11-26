import React, { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ProgressBar } from "../../utils/ProgressBar";
import { useUploadImage } from "../../../storage/hooks/useUploadImage";
import { useSaveDocuments } from "../../../storage/hooks/useSaveDocuments";

export const AddCategory = () => {
  const types = ["image/png", "image/jpeg"];

  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState(null);
  const [finalData, setFinalData] = useState(null);
  const [fileError, setFileError] = useState(null);

  const { url, progress, error } = useUploadImage(file, "/Categories/");
  const { loading, saveError, success } = useSaveDocuments(
    finalData,
    "/categories"
  );

  const { register, handleSubmit, watch, errors } = useForm({
    defaultValues: {
      discount: 0,
    },
  });

  const onSubmit = (data) => {
    setFormData(data);
    setFileError(null);
    if (types.includes(data.imageUrl[0].type)) {
      setFile(data.imageUrl[0]);
    } else {
      setFile(null);
      setFormData(null);
      setFileError("Please select an image file (png or jpeg)");
      return;
    }
  };

  useEffect(() => {
    const data = {
      ...formData,
      imageUrl: url
    }
    console.log(data);
    setFinalData(data);
    setFile(null);
  },[url]);

  return (
    <div className="row">
      <div className="col-xl-12 col-md-12">
        <div className="card card-static-2">
          <div className="card-title-2">
            <h4>Add New Category</h4>
          </div>
          {file ? (
            <div className="card-body">
              <h4>Uploading Image ! Please wait...</h4>
              <ProgressBar progress={progress} />
            </div>
          ) : (
            <div className="card-body">
              {fileError && <span className="error">{fileError}</span>}
              <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-12 col-md-4">
                    <div className="form-group">
                      <label htmlFor="name">Category Name</label>
                      <input
                        type="text"
                        name="name"
                        className={
                          errors.name
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                        id="name"
                        placeholder="Enter Category Name"
                        ref={register({ required: true })}
                      />
                      {errors.name && errors.name.type === "required" && (
                        <span className="error">
                          Please enter Category name
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="col-12 col-md-4">
                    <div className="form-group">
                      <label htmlFor="discount">Discount</label>
                      <input
                        type="number"
                        name="discount"
                        min="0"
                        className={
                          errors.discount
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                        id="discount"
                        placeholder="Enter Discount"
                        ref={register({ required: true })}
                      />
                      {errors.discount &&
                        errors.discount.type === "required" && (
                          <span className="error">Please enter discount</span>
                        )}
                    </div>
                  </div>
                  <div className="col-12 col-md-4">
                    <div className="form-group">
                      <label htmlFor="imageUrl">Image</label>
                      <input
                        type="file"
                        name="imageUrl"
                        className={
                          errors.discount
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                        id="imageUrl"
                        placeholder="Select Image"
                        ref={register({ required: true })}
                      />
                      {errors.imageUrl &&
                        errors.imageUrl.type === "required" && (
                          <span className="error">
                            Please select Category Image
                          </span>
                        )}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12" style={{ marginTop: "10px" }}>
                    <button type="submit" className="btn btn-sm btn-success">
                      Add New Category
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
