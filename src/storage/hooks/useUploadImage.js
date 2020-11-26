import { useState, useEffect } from "react";
import { storage } from "../firebase";

export const useUploadImage = (file, path) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references
    if (file) {
      const uploadRef = storage.ref(path + file.name);

      uploadRef.put(file).on(
        "state_changed",
        (snap) => {
          let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
          setProgress(percentage);
        },
        (err) => {
          setError(err);
        },
        async () => {
          const url = await uploadRef.getDownloadURL();
          // const createdAt = timestamp();
          // await collectionRef.add({ url, createdAt });
          setUrl(url);
        }
      );
    }
  }, [file, path]);

  return {
    progress,
    error,
    url,
  };
};
