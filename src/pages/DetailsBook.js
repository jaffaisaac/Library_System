import React, { useEffect, useState } from 'react'
import './detailsBook.css'
import { useParams } from 'react-router-dom';
import { doc,getFirestore,collection, getDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../configFireBase/firebaseCofig';
export const DetailsBook = () => {
  const {id} =useParams();
  const [bookDetails, SetBookDeaitls] = useState(null);
  
// * this function return a  book basing on the id searched
  const   getBookdetails=async(id)=>{
    const startfireBase = initializeApp(firebaseConfig);
    const db = getFirestore(startfireBase);
    const collRef =collection(db,'BookStore');
    const BookDocumentRef =doc(collRef,id);
    try {
      console.log('Before fetching data');
      const ReturedBookResults = await getDoc(BookDocumentRef);
      if (ReturedBookResults.empty) {
        const BookData = ReturedBookResults.data();
        console.log(`yesssssss result return`,BookData);
        return BookData;
      } else {
        console.log(`No such book Here`);
      }
    } catch (error) {
      console.log("Failed to Fetch",error);
    }
  }


    useEffect( ()=>{
      console.log(`id`,id);
        const fetchBookdetails =async ()=>{
          try {
            const details = await getBookdetails(id);
            console.log(`detiale`,details);
            SetBookDeaitls(details);
          
          } catch (error) {
            console.log(`Failed to fetch`,error);
          }
        }
        fetchBookdetails();
    } ,[id]);


  return (
    <>
      <div className="AllBookInfor">
      { bookDetails ? (
        <> 
        <div className="imgDescriptionsection">
        <div className="imageArea">
          <img src={bookDetails.imageUrl} alt="my-book" />
        </div>
        <div className="DescriptionSection">
          {bookDetails.Description}
        </div>
      </div>

      <div className="BkDetailBtnsection">
        <div className="BkdetailSection">
          <p> <span className='Textstyle'>Title:</span> Way of life</p>
          <p><span className='Textstyle'>Author :</span> John cator</p>
          <p><span className='Textstyle'>ISBN:</span> 1003</p>
          <p><span className='Textstyle'>Category:</span> Networking</p>
          <p><span className='Textstyle'>Status:</span> Available</p>
          <p><span className='Textstyle'>Shelf:</span> 7</p>
        </div>

        <div className="BtnControlsection">
          <div className="librarianBtn btn-Gruoup">

            <button>Update Book</button>
            <button className='dangerBtn'>Delete Book</button>
          </div>
          <div className="UsersBtn btn-Gruoup">
            <button>Borrow Book</button>
            <button className='dangerBtn'>Cancel Borrow</button>
          </div>
        </div>

      </div>
      </>
      ):(
        <>
        <p>Loading...</p>
        </>
      )}
        
ok


      </div>
    </>
  )
}
