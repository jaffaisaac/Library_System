import React from 'react'
import './bookShef.css'
import book2 from '../assets/Books/bookCover3.jpg'
export const BookShef = () => {
  return (

    <>
    <h2>Select book shelf to found book</h2>
    <div className='bookShelfContent'>
      <div className="bookSearch">
          <div >
            <select className="optionSelect">
              <option >Locate Book From Sheif No.</option>
              <option value="">All Books</option>
              <option value="">BookShelf 1</option>
              <option value="">BookShelf 2</option>
              <option value="">BookShelf 3</option>
              <option value="">BookShelf 4</option>
              <option value="">BookShelf 5</option>
              <option value="">BookShelf 6</option>
              <option value="">BookShelf 7</option>
              <option value="">BookShelf 8</option>
              <option value="">BookShelf 9</option>
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
    </>
  )
}
