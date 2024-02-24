import React, { useState } from 'react'
import './borrowBooks.css'
import {useLocation, useNavigate} from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../configFireBase/firebaseCofig';
import { addDoc,getDocs,updateDoc, getFirestore, collection } from 'firebase/firestore';

export const BorrowBooks = () => {
  const navigate =useNavigate();
  // *am picking information from the url
  const location = useLocation();
  const queryparams = new URLSearchParams(location.search);
  const BorrowId = queryparams.get('BorrowID') || '';
  const bkID = queryparams.get('BookID') || '';
  const BkName = queryparams.get('BookName') || '';
  const userId = queryparams.get('userID') || '';
  const UserName = queryparams.get('UserName') || '';
  const UserType = queryparams.get('UserType') || '';

// *handling Comfirm btn 
const [ObtainedData,setObtainedData] = useState({
  BorrowId,
bkID,
BkName,
userId,
UserName,
UserType,
Fine_Date:'',
Fine_Amount:'',
comment:"",
StatusReturn:"No"
})
const handleComfirmResult =async(e,borrowId)=>{
  e.preventDefault();
  const firebaseapp =initializeApp(firebaseConfig);
  const db =getFirestore(firebaseapp);
  const returneesCollection =collection(db,'returnees');
  console.log("Data to be added:", ObtainedData);
  try {
    await addDoc(returneesCollection,ObtainedData);
    console.log(`Data added successfully`);
  } catch (error) {
    console.log('No Data saved',error);
  }
  const collRef = collection(db, "BorrowedBooks");
    const querySnapshot = await getDocs(collRef);

    querySnapshot.forEach(async (doc) => {
      try {
        if (ObtainedData.BorrowId === doc.data().BorrowId) {
          const docRef = doc.ref;
          await updateDoc(docRef, {
            Status: "Approved",
          });
          console.log(`Status updated for BorrowId: ${borrowId}`);
        }
      } catch (error) {
        console.log(`Failed to update status`, error);
      }
    });
    navigate('/borrowTransactions');
}

// * onchangehandle
const onchangeinput=(e)=>{
const {name, value} = e.target;
setObtainedData( (prevdata) =>({...prevdata, [name]:value}));
}
  return (
    <>
      <h2>Borrow Book</h2>
      <form className='borrowForm'>

        <div className="borrrowedDetile">
            <div className="userInfor">
              Borrow ID::
              <input type="text" placeholder='Borrow ID' value={BorrowId}  autoComplete='off' required  onChange={onchangeinput}/>Book ID::
              <input type="text" placeholder='Book ID'value={bkID} autoComplete='off' required onChange={onchangeinput} />Book Name::
              <input type="text" placeholder='Book Name' value={BkName} autoComplete='off' required  onChange={onchangeinput}/>User ID::
              <input type="text" placeholder="User ID" value={userId} autoComplete="off" required onChange={onchangeinput} />
            </div>
            
            <div className="bookInfor">
            User Name::
              <input type="text" placeholder="User Name" value={UserName} autoComplete="off" required onChange={onchangeinput} />User Type::
              <input type="text" placeholder="User Type" value={UserType} autoComplete="off" required  onChange={onchangeinput}/> Fine Date::
                <input type="date" autoComplete='off' name="Fine_Date" value={ObtainedData.Fine_Date}  onChange={onchangeinput} required />
              <input type="number" placeholder='Fine Amount' name='Fine_Amount' value={ObtainedData.Fine_Amount} autoComplete='off' required onChange={onchangeinput} />
                <textarea name="" id="" cols="0" rows="0" name='comment' value={ObtainedData.comment} placeholder='Comment' onChange={onchangeinput}></textarea>
            </div>
        </div>

        <div className="buttonSection">
          <button onClick={handleComfirmResult}>Confirm</button>
        </div>
      </form>
    </>
  )
}
