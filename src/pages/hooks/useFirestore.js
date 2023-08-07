import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';

const useFirestore = collection => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = projectFirestore
      .collection(collection)
      .orderBy('createdAt', 'desc')
      .onSnapshot(snap => {
        let documents = [];
        snap.forEach(doc => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      });

    return () => unsub();
    // this is clean up function that react will run when
    // a component using hook unmount
  }, [collection]);

  return { docs };
};

export default useFirestore;
