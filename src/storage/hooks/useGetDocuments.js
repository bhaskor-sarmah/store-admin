import { useState, useEffect } from 'react';
import { database } from '../firebase';

export const useGetDocuments = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = database.collection(collection)
    //   .orderBy('id', 'desc')
      .onSnapshot(snap => {
        let documents = [];
        snap.forEach(doc => {
          documents.push({...doc.data(), id: doc.id});
        });
        setDocs(documents);
      });

    return () => unsub();
    // this is a cleanup function that react will run when
    // a component using the hook unmounts
  }, [collection]);

  return { docs };
};
