import React from 'react'
import mybook from '../assets/Books/bookcover.jpg';
import './detailsBook.css'
export const DetailsBook = () => {
  return (
    <>
      <div className="AllBookInfor">

        <div className="imgDescriptionsection">
          <div className="imageArea">
            <img src={mybook} alt="my-book" />
          </div>
          <div className="DescriptionSection">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur dolor maiores, doloribus ipsa cum animi aut quibusdam nobis est provident quidem! Illum, ratione voluptates. Deserunt facere sit voluptate accusamus vitae.
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

      </div>
    </>
  )
}
