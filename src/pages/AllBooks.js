import React from 'react'
import './allBooks.css'
import firebaseConfig from '../configFireBase/firebaseCofig'
import { initializeApp } from 'firebase/app'
import { getDocs,collection,getFirestore } from 'firebase/firestore'
import { useEffect,useState } from 'react'
export const AllBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const firebaseApp = initializeApp(firebaseConfig);
      const db = getFirestore(firebaseApp);
      const collRef = collection(db, 'BookStore');

      try {
        const querySnapshot = await getDocs(collRef);
        const booksData = [];

        querySnapshot.forEach((doc) => {
          
          // Accessing data from each document
          const bookData = doc.data();
          booksData.push(bookData);
        });

        setBooks(booksData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means it runs only once after the initial render

  return (
    <>
      <div className="GalleryBookCards">
        {books.map((book, index) => (
          <div key={index} className="bookCard">
            <div className="imgCardSection">
              {/* Replace 'book1' with the appropriate property from your book data */}
              <img src={book.Bookimage} alt={`Book ${index}`} />
            </div>
            <div className="cardDetails">
              <p>
                <span className='TextStyle'>Title:</span> {book.BookID}
              </p>
              <p>
                <span className='TextStyle'>Author:</span> {book.Authur}
              </p>
              <p>
                <span className='TextStyle'>Status:</span> Available({book.No_Of_BookCopies})
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
