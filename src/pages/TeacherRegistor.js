import React, { useState } from 'react'
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../configFireBase/firebaseCofig';
import {  addDoc, collection, getFirestore } from 'firebase/firestore';
import 'react-toastify/dist/ReactToastify.css';
// import { toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom'
export const TeacherRegistor = () => {
  const redirect =useNavigate();
const [TrFormData, setTrFormData]=useState({
  TrID:'',
  FirstName:'',
  LastName:'',
  DOB:'',
  Gender:'',
  Email:'',
  password:''
});
const handleInputChange=(event)=>{
  const {name,value} = event.target;
  setTrFormData((prevData)=>({...prevData, [name]:value})) 
}

const handleSubmitForm = async (event) => {
  event.preventDefault();

  // Check for empty fields
  const isEmptyField = Object.values(TrFormData).some(value => value === '');

  if (isEmptyField) {
    console.log("Please fill in all the fields before submitting.");
    return;
  }

  const startApp = initializeApp(firebaseConfig);
  const db = getFirestore(startApp);
  const collRef = collection(db, "Student_Registor");

  try {
    await addDoc(collRef, {
      new_id: TrFormData.TrID,
      new_firstName: TrFormData.FirstName,
      new_lastName: TrFormData.LastName,
      new_dob: TrFormData.DOB,
      new_gender: TrFormData.Gender,
      new_email: TrFormData.Email,
      new_password: TrFormData.password,
      new_UserType: "teacher",
    });

    console.log("Teacher added successfully");
    redirect('/login');
  } catch (err) {
    console.log("Error", err);
  }
};


  return (
    <>
    <h1> Teacher Registration Form</h1>
  <form   >
    <div className="formInputSection">
      {/* inpyutsOnly */}
        <div className="inputsOnly">
          <input type="text" placeholder='Enter ID' name='TrID' value={TrFormData.TrID} onChange={handleInputChange}  required autoComplete='off' />
          <div className="fromGroup">
          <input type="text" placeholder='First Name' name='FirstName' value={TrFormData.FirstName} onChange={handleInputChange} required autoComplete='off' />
          <input type="text" placeholder='Last Name' name='LastName' value={TrFormData.LastName} onChange={handleInputChange}  required autoComplete='off' />
          </div>
          <div className="fromGroup">
          <input type="date" placeholder='Date of  Birth' name='DOB' value={TrFormData.DOB}  onChange={handleInputChange} required autoComplete='off' />
         <select name='Gender' value={TrFormData.Gender}  onChange={handleInputChange}>
          <option >Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
         </select>
          </div>
          <input type="email" placeholder='Email' name='Email' value={TrFormData.Email} onChange={handleInputChange}  required autoComplete='off' />
         

          <input type="password" placeholder='password' name='password' value={TrFormData.password}  onChange={handleInputChange}  required autoComplete='off' />

        </div>
      

    </div>
    <button type='submit' onClick={handleSubmitForm} >Register</button>

  </form>
  </>    
  )
}


/**
 * *here  am trying to access the the passed date  , take king of the useState here its taking  a function as its argument
 * 
 * * i have added the toastify libaray for the notifications
 */