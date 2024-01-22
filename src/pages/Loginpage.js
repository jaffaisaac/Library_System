import React, { useState } from 'react'
import { initializeApp } from 'firebase/app'
import firebaseConfig from '../configFireBase/firebaseCofig'
import 'firebase/auth'
import './loginPage.css'
import { collection, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore'
import {useNavigate} from 'react-router-dom'
export const Loginpage = ({onlogin}) => {

  const myfirebase =initializeApp(firebaseConfig)
  const db = getFirestore(myfirebase);
  const UserCollectionDetails = collection(db,'Student_Registor');
const navigate=  useNavigate()//*used to rediret to other pages

  const [FormData, setFormData] = useState({
    userType:"teacher",
      email:"",
      password:""
    })
  const handleInputChange=(event)=>{
    // console.log("Event targe",event.target)
    const {name,value} =event.target ;
    setFormData({
      ...FormData,[name]:value
    });
  }
  const handleSubmit =(e)=>{
    e.preventDefault();
    const {email,password,userType} = FormData ;
    Loginuser(userType,email,password)
    onlogin(userType);
  }
  // async function  Loginuser( userType, Email ,Password){
  //     try {
  //       //*check if user email ,password exit in the data base 
  //       const q =query(UserCollectionDetails,where("new_email","==",Email),where("new_password","==",Password),where("new_UserType","==",userType))
  //       const querySnapshot = await getDoc(q);
        

  //       if (querySnapshot.size > 0) {
  //         querySnapshot.forEach((docData) => {
  //           console.log(docData.data().new_UserType);
  //           if (userType === 'student') {
  //             console.log("Student Logged in");
  //           } else if (userType === 'teacher') {
  //             console.log("Teacher logged in");
  //           } else if (userType === 'librarian') {
  //             console.log("Librarian in the system");
  //           }
  //         });
  //       }
  //       else {
  //       console.log("Please enter  Email and Password");
  //       }
  //     } catch (error) {
  //       console.log("Failed to find User Details",error);
  //     }
  // }
  async function Loginuser(userType, Email, Password) {
//     console.log("Email:", Email);
// console.log("Password:", Password);
// console.log("userType:", userType);
    try {
      if (Email && Password && userType) {
        const userQuery = query(
          UserCollectionDetails,
          where("new_email", "==", Email),
          where("new_password", "==", Password),
          where("new_UserType", "==", userType)
        );

        const querySnapshot = await getDocs(userQuery);

        if (querySnapshot.size > 0) {
          // console.log("User found:");
          navigate('/allbooks')
          querySnapshot.forEach((doc) => {
            // const userData = doc.data();
            // console.log(userData);

            // Access specific fields
            // console.log("User Type:", userData.new_UserType);
            // console.log("Email:", userData.new_email);
            // Add more fields as needed
          });

          // Continue with your logic, e.g., redirecting or setting user state
        } else {
          console.log("User not found");
        }
      } else {
        console.log("Please enter Email and Password");
      }
    } catch (error) {
      console.log("Failed to find User Details", error);
    }
  }
    return (
    <>
      <h1>Login Form</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="userType">User Type:</label>
          <select id="userType" name="userType" onChange={handleInputChange} className="select-option">
            <option >Select userType</option>
            <option value="librarian">Librarian</option>
            <option value="teacher">Teacher</option>
            <option value="student">Student</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" onChange={handleInputChange} className="input-field" required />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" onChange={handleInputChange} className="input-field" required />
        </div>

        <button type="submit"  className="submit-button">Submit</button>
      </form>
  
    </>
  )
}


/**
 * *here we are to handle 
 * ? loginFuntion -> pick email $ password from the field 
 * 
 */