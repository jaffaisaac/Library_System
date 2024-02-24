import React, { useEffect, useState } from "react";
import './borrowstatus.css';
import firebaseConfig from "../configFireBase/firebaseCofig";
import { initializeApp } from "firebase/app";
import {getDocs, collection,getFirestore} from "firebase/firestore";
import {useNavigate} from 'react-router-dom'
export const BorrowStatus = () => {
  const navigate = useNavigate();
const [ReturnedData, setReturnedData] = useState([]);

useEffect(()=>{
  const fetchBorrowedBook = async()=>{
    const firebase =initializeApp(firebaseConfig);
    const db = getFirestore(firebase);
    const RefBook= collection(db,'BorrowedBooks');
    try {
      const userID =localStorage.getItem('userID')
      const querrySnap =  await getDocs(RefBook);
      const userBorrowedBooks = [];
      querrySnap.forEach(doc=>{
        if(userID ===doc.data().UserID){
          userBorrowedBooks.push(doc.data())
        }
      })
      setReturnedData(userBorrowedBooks);
      console.log(ReturnedData);
    } catch (error) {
      console.log(`Failed to get book borrowed`,error);
    }
  }
  console.log(ReturnedData);
  fetchBorrowedBook();
});


//*handleReturn boook 
const handleReturn =async()=>{

}


  return (
    <center>
       {ReturnedData.map((book, index) => (
        <>
         <div key={index} className={book.Status==="Pending" ? "pendingcss": book.Status==="Approved"? "approvedcss" :book.Status==="Returned"?"returnedcss" :"cancelledcss"}>
          { book.Status ==='Pending' && <h3>Book Pending</h3> }
          { book.Status ==='Approved' && <h3>Book Approved</h3> }
          { book.Status ==='Cancelled' && <h3>Book Cancelled</h3> }
          { book.Status ==='Returned' && <h3>wait for Book Return Approval</h3> }
          <div className="mysty">
            <div className="left">
            <p>BorrowID: {book.BorrowId}</p>
            <p>BookID: {book.BookId}</p>
            </div>
            <div className="right ">
            <p>BookName: {book.BookName}</p>
            <p>BorrowDate: {book.BorrowDate}</p>
            </div>
          </div>
          {book.Status ==="Pending" &&  <button onClick={()=>(navigate('/'))}>  Return Home</button>}
         {book.Status ==='Approved' && <button onClick={handleReturn}>Return Book</button>}
          {book.Status ==='Cancelled' &&  <button > Remove Cancelled Request</button> }
          {book.Status ==='Returned' &&  <button style={{cursor:'wait'}} > Remove Cancelled Request</button> }
       

      </div>
        </>
      ) )}
      
    
    </center>
  );
};
