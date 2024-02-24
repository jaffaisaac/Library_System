import React from 'react'
import './returnBook.css'
import firebaseConfig from "../configFireBase/firebaseCofig";
import { initializeApp } from "firebase/app";
import {getDocs, collection,getFirestore} from "firebase/firestore";
import { useState,useEffect } from 'react';
export const ReturnBooks = () => {
    const [ReturnedData, setReturnedData] = useState([]);
    
useEffect(()=>{
    const fetchBorrowedBook = async()=>{
      const firebase =initializeApp(firebaseConfig);
      const db = getFirestore(firebase);
      const RefBook= collection(db,'returnees');
      try {
        const querrySnap =  await getDocs(RefBook);
        const userBorrowedBooks = [];
        querrySnap.forEach(doc=>{
        
            userBorrowedBooks.push(doc.data())
          
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
  return (
    <>
       <h2>Returned  Book </h2>
       {ReturnedData.map( (data)=>( 
        data.StatusReturn==="Yes" && 
        <>
         <div className="container">
        <div className="groupfield">
        BkName:{data.BkName}|| 
        BorrowId:{data.BorrowId}
        </div>
        <div className="container">
        StatusReturn:{data.StatusReturn} ||
        userName:{data.UserName}
       </div>
       <div className="container">
            UserType:{data.UserType} ||
            bkID:{data.bkID}
       </div>

       <div className="container">
        userId:{data.userId}
        </div>
    </div>
    <button>Cleared</button>
    </>
       
       ))}
    
    </>
  )
}
