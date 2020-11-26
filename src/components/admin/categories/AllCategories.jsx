import React from "react";
import { useList } from "react-firebase-hooks/database";
import { database } from "../../../storage/firebase";
import { AddCategory } from "./AddCategory";
import {useConfirmationDialog} from "../../../contexts/ConfirmDialogContext";

const AllCategories = () => {
  const [snapshots, loading, error] = useList(database.ref("categories"));
  const { getConfirmation } = useConfirmationDialog();

  const db = database.ref("/categories");

  const handleDeleteClick = async (key) => {
    const confirmed = await getConfirmation({
      title: "Attention!",
      message: "Are you sure you would like to delete this entry?",
    });
    if (confirmed) {
      db.child(key).remove().then(() => {
        console.log("Deleted");
      });
    }else{
      console.log("Rejected");
    }
  }

  return (
        <p>
          {error && <strong>Error: {error}</strong>}
          {loading && <span>Loading...</span>}
          {!loading && snapshots && (
            <div className="row">
              <div className="col-xl-12 col-md-12">
                <div className="card card-static-2 mb-30">
                  <div className="card-title-2">
                    <h4>All Categories</h4>
                  </div>
                  <div className="card-body-table">
                    <div className="table-responsive">
                      <table className="table ucp-table table-hover">
                        <thead>
                          <tr>
                            <th style={{ width: 200 }}>Category ID</th>
                            <th style={{ width: 200 }}>Category Name</th>
                            <th style={{ width: 200 }}>No of Sub-Categories</th>
                            <th style={{ width: 130 }}>Discount</th>
                            <th style={{ width: 100 }}>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {snapshots.map((v) => (
                            <tr key={v.key}>
                              <td>{v.key}</td>
                              <td>{v.val().name}</td>
                              <td>{v.val().subcategory && Object.keys(v.val().subcategory).length}</td>
                              <td>{v.val().discount}</td>
                              <td className="action-btns">
                                <button className="btn btn-info xs-button">Edit</button>
                                &nbsp;
                                <button className="btn btn-danger xs-button" onClick={() => handleDeleteClick(v.key)}>Delete</button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </p>
  );
};

export default AllCategories;
