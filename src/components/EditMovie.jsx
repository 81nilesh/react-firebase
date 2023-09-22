import React, { useState } from "react";
import { db } from "../lib/init-firebase";
import { doc, updateDoc, setDoc } from "firebase/firestore";

export default function EditMovie() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (name === "" || id === "") {
      return;
    }
    const docRef = doc(db, "movies", id);
    updateDoc(docRef, { name })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error.message));
    // const docRef = doc(db, "movies", id);
    // setDoc(docRef, { age: 26 })
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => console.log(error.message));
  }
  return (
    <div>
      <h4> Edit Movie</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">Movie ID</label>
        <input
          id="id"
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <br />
        <label htmlFor="name">Movie Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Update movie</button>
      </form>
    </div>
  );
}
