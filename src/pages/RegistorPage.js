import React, { useRef, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import './registorPage.css'
import { initializeApp } from 'firebase/app'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import firebaseConfig from '../configFireBase/firebaseCofig'


// Toastfiy libarary import 


export const RegistorPage = () => {

  const formRef=useRef();

  // * this is used in navigation
const navigate = useNavigate();
  // * this for the image tag
const [selectedImage,setSelectedImage]=useState(null)
const handleImageChange=(event)=>{
  const file =event.target.files[0];
  if(file){
    const reader =new FileReader();
   reader.onloadend=()=>{
    setSelectedImage(reader.result)
   }
   reader.readAsDataURL(file)
  }else{
    setSelectedImage(null)
  }
 
}

// *register section
// !state management
const [FormData, setformData] = useState({
  id:'',
  FName:'',
  Lname:'',
  DOB:'',
  genderOption:'',
  email:'',
  courseOption:'',
  password:''
});

//? handle the form changefunction
const handleInputChange =(e)=>{
  const {name ,value } =e.target;
  setformData( (prevData)=>({...prevData, [name]:value}) )

}
//*form submition
const formSubmit =(e)=>{
  e.preventDefault();
  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp)
  const collRef = collection(db,"Student_Registor");
  addDoc(collRef,{
    new_id:FormData.id,
    new_firstName:FormData.Fname,
    new_lastName:FormData.Lname,
    new_dob:FormData.DOB,
    new_gender:FormData.genderOption,
    new_email:FormData.email,
    new_course:FormData.courseOption,
    new_password:FormData.password,
    new_imageSelected:selectedImage,
    new_UserType:"Student"
  })
  .then(docRef=>{ 
    console.log("Data was added successfully");
    
    setformData({
      id:'',
      FName:'',
      Lname:'',
      DOB:'',
      genderOption:'',
      email:'',
      courseOption:'',
      password:'',
      UserType:'Student'
    })
   formRef.current.reset();
    setSelectedImage(null);
    navigate('/login');
   }  )
  .catch(err=>console.error("Failed no data added",err)  )
}

  return (
    <>
        <h1>Registration Form</h1>
      <form  ref={formRef} >
        <div className="formInputSection">
          {/* inpyutsOnly */}
            <div className="inputsOnly">
              <input type="text" placeholder='Enter ID' name='id' value={FormData.id} onChange={handleInputChange} required autoComplete='off' />
              <div className="fromGroup">
              <input type="text" placeholder='First Name' name='Fname' value={FormData.firstName} onChange={handleInputChange} required autoComplete='off' />
              <input type="text" placeholder='Last Name' name='Lname' value={FormData.lastName} onChange={handleInputChange} required autoComplete='off' />
              </div>
              <div className="fromGroup">
              <input type="date" placeholder='Date of  Birth' name='DOB' value={FormData.dob} onChange={handleInputChange} required autoComplete='off' />
             <select name='genderOption' onChange={handleInputChange} >
              <option>Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
             </select>
              </div>
              <input type="email" placeholder='Email' name='email' value={FormData.email} onChange={handleInputChange} required autoComplete='off' />
              <div className="fromGroup">
              <select name='courseOption' value={FormData.courseSelectedOption} onChange={handleInputChange} >
              <option >Select Course</option>
              <option value="Education">Education</option>
              <option value="Health &  Managment">Health &  managment</option>
              <option value="Business & Managment">Business & Managment</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Fine Arts & Designs">Fine Arts & Designs</option>
              <option value="Agriculture & Environment">Agriculture & Environment </option>
              <option value="Language & Linguistcs">Language & Linguistcs</option>
             </select>


              {/* handling image */}
                <input type="file"id="imageInput" onChange={handleImageChange}  name="imageInput" accept="image/*" />
              </div>

              <input type="password" placeholder='password' name='password' value={FormData.password} onChange={handleInputChange} required autoComplete='off' />

            </div>
            {/* profile picture */}
            <div className="profile">
              <img src={selectedImage} alt=" ____selecte your profile picture____ " />
            </div>

        </div>
        <button type='submit' onClick={formSubmit} >Register</button>
       
      </form>
      </>    
  )
}

/**
 * ! image
* * handleImageChange is a method that sets the image on the image 
 */

/**
 * * registor section
 */