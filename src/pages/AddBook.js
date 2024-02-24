import React from "react";
import "./addBook.css";
import { useState } from "react";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../configFireBase/firebaseCofig";
import {
  addDoc,
  getFirestore,
  collection,
  serverTimestamp,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { NavLink } from "react-router-dom";

export const AddBook = ({ userType }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [addData, setAddData] = useState({
    id: "",
    BkTittle: "",
    description: "",
    BKimage: " ",
    Author: "",
    isbn: "",
    BookCopies: "",
    BkShelf: "",
    CategoryBk: "",
  });

  const isAuthorized = userType === "librarian";
  if (!isAuthorized) {
    return (
      <p>
        You are not Authoried to this page &nbsp;
        <NavLink to="/" end>
          Back home
        </NavLink>
      </p>
    );
  }

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value, files } = e.target;
    if (name === "BKimage") {
      setSelectedImage(files[0]);
    } else {
      setAddData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const formSubmission = async (event) => {
    event.preventDefault();

    if (
      !addData.id ||
      !addData.BkTittle ||
      !addData.description ||
      !addData.BKimage === " " ||
      !addData.Author ||
      !addData.isbn ||
      !addData.BookCopies ||
      !addData.BkShelf ||
      !addData.CategoryBk
    ) {
      console.log("Please fill in all required fields.", addData);
      console.log("addData.BKimage:", addData.BKimage);
      return;
    }

    const firebaseApp = initializeApp(firebaseConfig);
    const db = getFirestore(firebaseApp);
    const collRef = collection(db, "BookStore");

    const storage = getStorage();
    console.log("Before storageRef creation:", addData.BKimage);
    const storageRef = ref(
      storage,
      `book_images/${addData.id}_${addData.BKimage ? addData.BKimage.name : ""}`
    );
    console.log("After storageRef creation:", storageRef);

    try {
      await uploadBytes(storageRef, selectedImage);
      const imageUrl = await getDownloadURL(storageRef);

      await addDoc(collRef, {
        BookID: addData.id,
        BookTittle: addData.BkTittle,
        Authur: addData.Author,
        ISBN: addData.isbn,
        Description: addData.description,
        imageUrl,
        BookShef: addData.BkShelf,
        No_Of_BookCopies: addData.BookCopies,
        CategoryBook: addData.CategoryBk,
        AddOnperiod: serverTimestamp(),
      });

      console.log("Book added successfully");

      // *reset fields
      setAddData({
        id: "",
        BkTittle: "",
        Author: "",
        isbn: "",
        description: "",
        BkShelf: "",
        BookCopies: "",
        BKimage: "",
        CategoryBk: "",
      });

      setSelectedImage(null);
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  return (
    <>
      <h2>Add New Book</h2>
      <form>
        <div className="form-group">
          <input
            type="text"
            value={addData.id}
            name="id"
            onChange={handleChange}
            placeholder="Book ID"
            required
            autoComplete="off"
          />
          <input
            type="text"
            value={addData.BkTittle}
            name="BkTittle"
            onChange={handleChange}
            placeholder="Book title"
            required
            autoComplete="off"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            value={addData.Author}
            name="Author"
            onChange={handleChange}
            placeholder="Authur(s)"
            required
            autoComplete="off"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            value={addData.isbn}
            name="isbn"
            onChange={handleChange}
            placeholder="ISBN"
            required
            autoComplete="off"
          />
          <input
            type="number"
            value={addData.BookCopies}
            name="BookCopies"
            onChange={handleChange}
            placeholder="Number of book copies"
            required
            autoComplete="off"
          />
        </div>
        <div className="form-group">
          <textarea
            value={addData.description}
            name="description"
            onChange={handleChange}
            placeholder="Book Description Here"
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div className="form-group">
          <input
            type="file"
            name="BKimage"
            onChange={handleChange}
            accept="image/*"
          />
          <input
            type="number"
            value={addData.BkShelf}
            name="BkShelf"
            onChange={handleChange}
            placeholder="Book sheif"
            required
            autoComplete="off"
          />
        </div>
        <div className="form-group">
          <select
            className="selectionOptions"
            value={addData.CategoryBk}
            name="CategoryBk"
            onChange={handleChange}
          >
            <option>Select Book</option>
            <option value="programmingLangauages">Programming Language</option>
            <option value="DSA">Alogorithm & Data structure</option>
            <option value="webdevelopment">Web Development</option>
            <option value="DataBase_Systems">Data Base systems</option>
            <option value="Networking">Networking</option>
            <option value="CyberSecurity">Cyber Security</option>
            <option value="IOT">IOT</option>
            <option value="AIModule">AI Module</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <button type="submit" onClick={formSubmission}>
            Add Book
          </button>
        </div>
      </form>
    </>
  );
};
