import React from 'react'
import book2 from '../assets/Books/bookCover3.jpg'
import './bookCategory.css'
export const BookCategory = () => {
  return (
    <div className="mybody">
    <h2>Book Category section</h2>
    <div className='bookShelfContent'>
      <div className="bookSearch">
          <div >
            <select className="optionSelect">
              <option value="">Programming Language</option>
              <option value="">Alogorithm  & Data structure</option>
              <option value="">Web Development</option>
              <option value="">Data Base  systems</option>
              <option value="">Networking</option>
              <option value="">Cyber Security</option>
              <option value="">IOT</option>
              <option value="">Other</option>
            </select>
          </div>

      </div>
      <div className="bookSheifReturn">
      <div className="bookCard">
          <div className="imgcardSection">
            <img src={book2} alt="" />
          </div>
          <div className="cardDetils">
          <p> <span className='Textstyle'>Title:</span> Way of life</p>
          <p> <span className='Textstyle'>Author:</span> John wich</p>
          <p> <span className='Textstyle'>Statue:</span> Avaible (3)</p>
          </div>
        </div>

        <div className="bookCard">
          <div className="imgcardSection">
            <img src={book2} alt="" />
          </div>
          <div className="cardDetils">
          <p> <span className='Textstyle'>Title:</span> Way of life</p>
          <p> <span className='Textstyle'>Author:</span> John wich</p>
          <p> <span className='Textstyle'>Statue:</span> Avaible (3)</p>
          </div>
        </div>
        <div className="bookCard">
          <div className="imgcardSection">
            <img src={book2} alt="" />
          </div>
          <div className="cardDetils">
          <p> <span className='Textstyle'>Title:</span> Way of life</p>
          <p> <span className='Textstyle'>Author:</span> John wich</p>
          <p> <span className='Textstyle'>Statue:</span> Avaible (3)</p>
          </div>
        </div>
        <div className="bookCard">
          <div className="imgcardSection">
            <img src={book2} alt="" />
          </div>
          <div className="cardDetils">
          <p> <span className='Textstyle'>Title:</span> Way of life</p>
          <p> <span className='Textstyle'>Author:</span> John wich</p>
          <p> <span className='Textstyle'>Statue:</span> Avaible (3)</p>
          </div>
        </div>
        <div className="bookCard">
          <div className="imgcardSection">
            <img src={book2} alt="" />
          </div>
          <div className="cardDetils">
          <p> <span className='Textstyle'>Title:</span> Way of life</p>
          <p> <span className='Textstyle'>Author:</span> John wich</p>
          <p> <span className='Textstyle'>Statue:</span> Avaible (3)</p>
          </div>
        </div>
        <div className="bookCard">
          <div className="imgcardSection">
            <img src={book2} alt="" />
          </div>
          <div className="cardDetils">
          <p> <span className='Textstyle'>Title:</span> Way of life</p>
          <p> <span className='Textstyle'>Author:</span> John wich</p>
          <p> <span className='Textstyle'>Statue:</span> Avaible (3)</p>
          </div>
        </div>
      </div>
      
    </div>
    </div>
  )
}
