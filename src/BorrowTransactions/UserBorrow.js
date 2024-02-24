import React from "react";
import {useLocation ,useNavigate} from 'react-router-dom'
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../configFireBase/firebaseCofig';
import { addDoc, getFirestore, collection } from 'firebase/firestore';

export const UserBorrow = ({selectedBook }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const borrowId = queryParams.get("BorrowID");
  const bookId = queryParams.get("bookId");
  const bookName = queryParams.get("bookName");
  const userType = queryParams.get("userType");
  const userName = queryParams.get("userName");
  const userID = queryParams.get("userId");
  const borrowDate = queryParams.get("borrowDate");
  const navigate =useNavigate();
const saveBorrowedBk =async()=>{

// *firebase config
  const firbaseApp = initializeApp(firebaseConfig);
  const db =getFirestore(firbaseApp);
  const collRef =collection(db,'BorrowedBooks');
  try {
    await addDoc(collRef,{
      BorrowId:borrowId,
    BookId:bookId,
    BookName:bookName,
    UserType:userType,
    UserName:userName,
    UserID:userID,
    BorrowDate:borrowDate,
    Status:"Pending"
    })
   navigate('/allbooks');
  } catch (error) {
    console.log('Borrow Book failed to save',error);
  }
  
}
const handleConfirnBook=()=>{
  saveBorrowedBk();
 
}



  return (
    <>
      <center>
        <p>BorrowID :{borrowId}122</p>
        <p>BookID :{bookId}</p>
        <p>BookName :{bookName}</p>
        <p>UserID :{userID}</p>
        <p>UserType :{userType}</p>
        <p>UserName:{userName}</p>
        <p>BorrowDate: {borrowDate}</p>
        <button onClick={handleConfirnBook}>Confirm</button>
        <button className='edit_Btn' onClick={()=>navigate('/allbooks')}>Cancel</button>

      </center>
    </>
  );
};
