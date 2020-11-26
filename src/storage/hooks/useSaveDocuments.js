import { useEffect, useState } from "react";
import { database } from "../firebase";

export const useSaveDocuments = (data, collection) => {
  const [loading, setLoading] = useState(false);
  const [saveError, setSaveError] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setLoading(true);
    const dataRef = database.ref(collection);
    dataRef
      .push(data)
      .then(() => {
        setSuccess(true);
        setLoading(false);
      })
      .catch((error) => {
        setSaveError("Error saving data");
        setLoading(false);
      });
  }, [data]);

  return { loading, saveError, success };
};
