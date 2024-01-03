import React from 'react'
import './borrowBooks.css'
import book from '../assets/Books/bookCover3.jpg'
export const BorrowBooks = () => {
  return (
    <>
      <h2>Borrow Book</h2>
      <form className='borrowForm'>

        <div className="borrrowedDetile">
            <div className="userInfor">
            <input type="text" placeholder='Borrow ID' autoComplete='off' required />
            <input type="text" placeholder='User ID' autoComplete='off' required />
            <input type="text" placeholder='Book ID' autoComplete='off' required />
            <input type="Email" placeholder='Email' autoComplete='off' required />
            <input type="text" placeholder='Borrowed Date' autoComplete='off' required />
            <input type="text" placeholder='OverDue  Date' autoComplete='off' required />
            <input type="text" placeholder='Fine date' autoComplete='off' required />
          <select name="" id="">
            <option value="">Teacher</option>
            <option value="">Student</option>
          </select>

            </div>
            
            <div className="bookInfor">
              <input type="text" placeholder='Book ID' autoComplete='off' required />
              <input type="text" placeholder='Title' autoComplete='off' required />
              <div className="bookLog">
                <img src={book} alt="my book" />
              </div>
            </div>
        </div>

        <div className="buttonSection">
          <button>Submit</button>
        </div>
      </form>
    </>
  )
}
