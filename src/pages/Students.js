import React, { useEffect, useState } from 'react'
import './students.css'
import myfireBaseConfig from '../configFireBase/firebaseCofig';
import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';


export const Students = () => {
  const [studentData, setStudentData] = useState([]);

  const fetchData= async()=>{
       //* Initialize Firebase
       const firebaseApp =initializeApp(myfireBaseConfig);
       const db = getFirestore(firebaseApp);
       const collRef =collection(db,"Student_Registor");
       
       try {
        const OnlyStudents = query(collRef,where("new_UserType","==","student"));
        let allStudents =[]; 
        (await getDocs(OnlyStudents)).forEach(
            docu=>{
              const studentObject ={
                StID :docu.data().new_id,
                FirstName:docu.data().new_firstName,
                LastName:docu.data().new_lastName,
                DOB:docu.data().new_dob,
                Gender:docu.data().new_gender,
                Course:docu.data().new_course,
                Email:docu.data().new_email,
              }
              allStudents.push(studentObject)
            }        
        )
        setStudentData(allStudents)
      
       }catch(error){
        console.log("Error in fectching data")
       }
  }

   useEffect( ()=>{fetchData()} ,[ ]);

  return (
    <>
    <h1>Student Detials</h1>
    <div className="tableDetils">
          <table>
            <tbody>
            <tr>
              <th>Std</th>
              <th>First-Name</th>
              <th>Last-Name</th>
              <th>DOB</th>
              <th>Gender</th>
              <th>Course</th>
              <th>Email</th>
            </tr>
        {
         studentData.map((student)=>(
         <tr key={student.StID}>
              <td> {student.StID}</td>
              <td> {student.FirstName}</td>
              <td> {student.LastName}</td>
              <td>{student.DOB} </td>
              <td>{student.Gender} </td>
              <td>{student.Course} </td>
              <td>{student.Email} </td>
          </tr>
         ))
        }
           
            </tbody>
          </table>
    </div>
    </>
  )
}
