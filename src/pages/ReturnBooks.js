import React from 'react'
import './returnBook.css'
export const ReturnBooks = () => {
  return (
    <>
       <h2>Returned  Book </h2>
    <form className='returnForm' >
        <div className="form-group">
            <input type="text" placeholder='Return ID' required autoComplete='off' />
            <input type="text" placeholder='Borrow ID' required autoComplete='off' />
        </div>
        
        <div className="form-group">
            <input type="text" placeholder='Trans ID' required autoComplete='off' />
            <input type="text" placeholder='Book ID' required autoComplete='off' />
        </div>
        <div className="form-group">
            <input type="Date" placeholder='Returned Date' required autoComplete='off' />
            <input type="text" placeholder=' ReturnedBy ID' required autoComplete='off' />
        </div>
        <div className="form-group">
           <textarea name="" placeholder='Comment' id="" cols="30" rows="10"></textarea>
        </div>
       
        <div className="form-group">
            <button>Submit</button>
        </div>
        add date timestamp from firebase field
        </form>
    </>
  )
}
