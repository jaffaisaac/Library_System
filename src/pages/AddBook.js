import React from 'react'
import './addBook.css'
export const AddBook = () => {
  return (
    <>
    <h2>Add New Book </h2>
    <form >
        <div className="form-group">
            <input type="text" placeholder='Book ID' required autoComplete='off' />
            <input type="text" placeholder='Book tilte' required autoComplete='off' />
        </div>
        <div className="form-group">
            <input type="text" placeholder='Authur(s)' required autoComplete='off' />
        </div>
        <div className="form-group">
            <input type="number" placeholder='ISBN' required autoComplete='off' />
            <input type="number" placeholder='Number of copies' required autoComplete='off' />
        </div>
        <div className="form-group">
           <textarea name="" placeholder='Book Description Here' id="" cols="30" rows="10"></textarea>
        </div>
        <div className="form-group">
             <input type="file"id="imageInput"  placeholder='image URL'  name="imageInput" accept="image/*" />
            <input type="number" placeholder='Book sheif' required autoComplete='off' />
        </div>
        <div className="form-group">
            <button>Add Book</button>
        </div>
        add date timestamp from firebase field
        
    </form>
    </>
  )
}
