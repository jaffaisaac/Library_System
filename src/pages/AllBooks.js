// AllBooks.js
import {useNavigate} from 'react-router-dom'
import React, { useEffect, useState } from "react";
import "./allBooks.css";
import firebaseConfig from "../configFireBase/firebaseCofig";
import { initializeApp } from "firebase/app";
import {getDocs, collection,getFirestore,deleteDoc, doc} from "firebase/firestore";

export const AllBooks = ({userType}) => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
 const navigate =useNavigate();



  useEffect(() => {
    const fetchData = async () => {
      const firebaseApp = initializeApp(firebaseConfig);
      const db = getFirestore(firebaseApp);
      const collRef = collection(db, "BookStore");

      try {
        const querySnapshot = await getDocs(collRef);
        const booksData = [];

        querySnapshot.forEach((doc) => {
          const bookData = doc.data();
          booksData.push({ ...bookData, id: doc.id });
        });

        setBooks(booksData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
 


//* Function to generate a random ID
const generateRandomId = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const length = 8;
  let randomId = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomId += characters.charAt(randomIndex);
  }

  return randomId;
};




  const handleBookClick = (book) => {
    // console.log('Book clicked:', book);
    setSelectedBook(book);
    const randomId = generateRandomId();
    navigate(`/UserBorrow?bookId=${book.id}&bookName=${book.BookID}&userType=${userType}&userName=${localStorage.getItem('username')}&borrowDate=${new Date().toLocaleDateString()}&userId=${localStorage.getItem('userID')}&BorrowID=${randomId}`);
  };

  console.log(selectedBook); // Add this line
  const DeleteBook = async () => {
    //*check if the book is selected
    if (selectedBook) {
      const firebaseApp = initializeApp(firebaseConfig);
      const db = getFirestore(firebaseApp);
      const bookStoreRef = collection(db, "BookStore");

      const bookDocRef = doc(bookStoreRef, selectedBook.id);
      console.log("Book Data Before Deletion:", bookDocRef.id);
      try {
        await deleteDoc(bookDocRef);
        setBooks((prevBooks) =>
          prevBooks.filter((book) => book.id !== selectedBook.id)
        );
        console.log(`book Deleted sussefully`);
      } catch (error) {
        console.log(`Failed to delete book`, error);
      }
    }
  };
  console.log(selectedBook); 

  return (
    <>
      <div className="GalleryBookCards">
        {books.map((book, index) => (
          <div
            key={index}
            className="bookCard"
           
          >
            <div className="imgcardSection">
              <img src={book.imageUrl} alt={`Book ${index}`} />
            </div>
            <div className="cardDetils">
              <p>
                <span className="TextStyle">Title:</span> {book.BookID}
              </p>
              <p>
                <span className="TextStyle">Author:</span> {book.Authur}
              </p>
              <p>
                <span className="TextStyle">Status:</span> Available(
                {book.No_Of_BookCopies})
              </p>
            </div>

            <div className="additional_Infor">
              <div className="description">
                <p className="TextStyle">Description:</p>
                <p>{book.Description} </p>
              </div>
              {userType === "librarian" ?
              <div className="btnControl_section">
              <button className="edit_Btn" onClick={DeleteBook}>Delete</button>
            </div>:
             <div className="btnControl_section">
             <button  onClick={() => handleBookClick(book)}>Borrow</button>

           </div>}
              

             
            </div>
          </div>
        ))}
      </div>
 
    </>
  );
};
