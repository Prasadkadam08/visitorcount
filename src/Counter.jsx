import { useEffect, useState } from "react";
import { db, doc, getDoc, setDoc, updateDoc } from "./firebase";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchCount = async () => {
      const docRef = doc(db, "visitors", "count");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const newCount = docSnap.data().count + 1;
        setCount(newCount);
        await updateDoc(docRef, { count: newCount });
      } else {
        await setDoc(docRef, { count: 1 });
        setCount(1);
      }
    };

    fetchCount();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white text-3xl">
      Visitors: {count}
    </div>
  );
};

export default Counter;
