import React, { useState } from "react";
import { onSnapshot } from "firebase/firestore";
import { movieCollectionRef } from "../lib/firestore.collections";

export default function RealtimeMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    onSnapshot(movieCollectionRef);
    return () => {};
  }, []);

  return (
    <div>
      <h4>RealtimeMovies</h4>
    </div>
  );
}
