import React,{useEffect, useState} from 'react'
import { initializeApp } from 'firebase/app'
import firebaseConfig from '../configFireBase/firebaseCofig'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
export const Teachers = () => {
  const [AllTeacher, setAllTeacher] = useState([]);
  const fetchTeacherData = async()=>{
    const firebaseApp = initializeApp(firebaseConfig);
    const db = getFirestore(firebaseApp);
    const collRef =collection(db,"Student_Registor");
    const OnlyTeacher =query(collRef,where("new_UserType","==","Teacher"))
    try {
      const allTeacher =[];
      (await getDocs(OnlyTeacher)).forEach(
        documents=>{
          console.log(documents.data())
         const TeacherObject={
          ID :documents.data().new_id,
          Fname:documents.data().new_firstName,
          Lname:documents.data().new_lastName,
          gender:documents.data().new_gender,
          DOB:documents.data().new_dob,
          Email:documents.data().new_email
         }
         allTeacher.push(TeacherObject);
        }
        )
        setAllTeacher(allTeacher);
    } catch (error) {
      console.log("Failed to  Load Data",error)
    }

  } 
  useEffect(()=>{fetchTeacherData()},[])
   return (
    <>
      <h1>Teacher Detials</h1>
    <div className="tableDetils">
          <table>
            <tbody>  
            <tr>
              <th>Std</th>
              <th>First-Name</th>
              <th>Last-Name</th>
              <th>DOB</th>
              <th>Gender</th>
              <th>Email</th>
            </tr>
         {AllTeacher.map( (trData)=>(
            <tr>
            <td>{trData.ID}</td>
            <td>{trData.Fname}</td>
            <td>{trData.Lname}</td>
            <td>{trData.DOB}</td>
            <td>{trData.gender}</td>
            <td>{trData.Email}</td>
            </tr>
         ))}
           
            </tbody>
          </table>
    </div>
    </>
  )
}
