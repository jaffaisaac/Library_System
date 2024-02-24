import React, { useEffect, useState } from "react";
import "./libTransaction.css";
import firebaseConfig from "../configFireBase/firebaseCofig";
import { initializeApp } from "firebase/app";
import {
  getDocs,
  collection,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import {useNavigate} from 'react-router-dom'
export const LibTransaction = () => {
  const [BookTransaction, SetBooktransaction] = useState([]);

  // *this hook return data to the browser
  useEffect(() => {
    const handleBooktransaction = async () => {
      const firebaseInitalise = initializeApp(firebaseConfig);
      const db = getFirestore(firebaseInitalise);
      const collRef = collection(db, "BorrowedBooks");
      const queryShort = await getDocs(collRef);
      const data = [];
      queryShort.forEach((doc) => {
        try {
          data.push(doc.data());
          console.log(doc.data());
        } catch (error) {
          console.log("faied to load book", error);
        }
      });
      SetBooktransaction(data);
    };
    handleBooktransaction();
  }, []);

  // * handle Cancelled request
  const handleCancellRequest = async (borrowId) => {
    const firebaseInitalise = initializeApp(firebaseConfig);
    const db = getFirestore(firebaseInitalise);
    const collRef = collection(db, "BorrowedBooks");
    const querySnapshot = await getDocs(collRef);

    querySnapshot.forEach(async (doc) => {
      try {
        if (borrowId === doc.data().BorrowId) {
          const docRef = doc.ref;
          await updateDoc(docRef, {
            Status: "Cancelled",
          });
          console.log(`Status updated for BorrowId: ${borrowId}`);
        }
      } catch (error) {
        console.log(`Failed to update status`, error);
      }
    });

    // After updating the status, update the state to re-render the component
    const updatedData = await fetchUpdatedData();
    SetBooktransaction(updatedData);
  };

  const fetchUpdatedData = async () => {
    const firebaseInitalise = initializeApp(firebaseConfig);
    const db = getFirestore(firebaseInitalise);
    const collRef = collection(db, "BorrowedBooks");
    const queryShort = await getDocs(collRef);
    const data = [];
    queryShort.forEach((doc) => {
      try {
        data.push(doc.data());
      } catch (error) {
        console.log("faied to load book", error);
      }
    });
    return data;
  };



  // * handle handleApprove book 
  const navigate =useNavigate();
  const handleApprove =async (givenBk)=>{
    SetBooktransaction(givenBk)
    navigate(`/borrowbooks?BorrowID=${givenBk.BorrowId}&BookID=${givenBk.BookId}&BookName=${givenBk.BookName}&UserType=${givenBk.UserType}&UserName=${givenBk.UserName}&userID=${givenBk.UserID}`)
  }

  return (
    <>
      <h1>All Book transaction</h1>
      {BookTransaction.map((bookData, index) => (
        // Check if the status is "Cancelled" before rendering the div
        bookData.Status !== "Cancelled" ||   bookData.Status !== "Approved" && (
          <div className="userRequre" key={index}>
            <div className="bookBorrowDetails">
              <div className="BlockA">
                <p>
                  <span className="itemName">BorrowID :</span>
                  {bookData.BorrowId}
                </p>
                <p>
                  <span className="itemName">BookID :</span>
                  {bookData.BookId}
                <p>
                  <span className="itemName">BookName :</span>
                  {bookData.BookName}
                </p>
                </p>
              </div>
              <div className="BlockA">
              <p>
                  <span className="itemName">User ID:</span>
                  {bookData.UserID}
                </p>
                <p>
                  <span className="itemName">UserName:</span>
                  {bookData.UserName}
                </p>
                <p>
                  <span className="itemName">UserType :</span>
                  {bookData.UserType}
                </p>
              </div>
            </div>
            <hr />
            <div className="controBtn">
              <button onClick={()=>handleApprove(bookData)}>Approve</button>
              <button onClick={() => handleCancellRequest(bookData.BorrowId)}>
                Cancel
              </button>
            </div>
          </div>
        )
      ))}
    </>
  );
};
