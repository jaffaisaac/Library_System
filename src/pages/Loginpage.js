import React from 'react'
import './loginPage.css'
export const Loginpage = () => {
  return (
    <>
      <h1>Login Form</h1>
      
      <form>
        <div className="form-group">
          <label htmlFor="userType">User Type:</label>
          <select id="userType" name="userType" className="select-option">
            <option value="teacher">Librarian</option>
            <option value="teacher">Teacher</option>
            <option value="student">Student</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" className="input-field" required />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" className="input-field" required />
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
  
    </>
  )
}
