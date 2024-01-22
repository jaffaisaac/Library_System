import React from "react";
import { MdNotificationsActive } from "react-icons/md";
import myprofile from "../assets/download.jpg";
import { NavLink } from "react-router-dom";

export const Header = ({ userType, logOut }) => {
  const isLibrarian = userType === 'librarian';
  const isTeacher = userType === 'teacher';
  const isStudent = userType === 'student';

  // Check if the user is logged in
  const isUserLoggedIn = userType !== null;

  return (
    <header>
      <nav>
        {/* log section */}
        <div className="log">UniLib Connect</div>

        {/* links */}
        <div className="bookLinks ">
          <NavLink to="/" className="mylinks" end>
            Home
          </NavLink>

          {isUserLoggedIn && (
            <>
              <div className="dropdown">
                <span className="dropdownHeader">BookTransactions</span>
                <div className="dropdown-content">
                  {isLibrarian && (
                    <NavLink to="addbook" className="mylinks">
                      AddBoook
                    </NavLink>
                  )}

                  <NavLink to="allbooks" className="mylinks">
                    AllBooks
                  </NavLink>
                </div>
              </div>
              <NavLink to="Bookcategory" className="mylinks" end>
                Book Caterogy
              </NavLink>
              <NavLink to="Bookshelf" className="mylinks" end>
                Book Shelf
              </NavLink>

              {/* For only the Librarian */}
              {isLibrarian && (
                <div className="dropdown">
                  <span className="dropdownHeader">UserType</span>
                  <div className="dropdown-content">
                    <NavLink to="students" className="mylinks" end>
                      All students
                    </NavLink>
                    <NavLink to="teachers" className="mylinks" end>
                      All teacher
                    </NavLink>
                    <NavLink to='registerteacher' className="mylinks" end >
                      Register TR
                    </NavLink>
                  </div>
                </div>
              )}

              {/* For only the Teacher */}
              {isTeacher && (
                <div className="dropdown">
                  <span className="dropdownHeader">UserType</span>
                  <div className="dropdown-content">
                    <NavLink to="students" className="mylinks" end>
                      All students
                    </NavLink>
                  </div>
                </div>
              )}

              <div className="dropdown">
                <span className="dropdownHeader">BookTransactions</span>
                <div className="dropdown-content">
                  {isLibrarian && (
                    <> 
                  <NavLink to="borrowbooks" className="mylinks"> borrowbooks lib</NavLink>
                  <NavLink to="returedbooks" className="mylinks"> returedbooks lib</NavLink>
                    </>
                  )}
                  {isTeacher || isStudent && ( <> 
                   <NavLink to="" className="mylinks">  User borrowedbook</NavLink>
                  <NavLink to="" className="mylinks">user returedbook</NavLink>
                  </>)}
                </div>
              </div>
            </>
          )}
        </div>

        {/* search bar section */}
        <div className="searchBar">
          <input type="search" />
        </div>

        {/* userManagment section */}
        <div className="UserManagement">
          {/* {console.log("IsUserloggedIn:", isUserLoggedIn)}
          {console.log("userType:", userType)} */}

          {isUserLoggedIn ? (
            <>
              <a href="#" onClick={logOut}>
                LogOut
              </a>
            </>
          ) : (
            <>
              <NavLink to="login" end>
                Login
              </NavLink>
              <NavLink to="register" end>
                Register
              </NavLink>
            </>
          )}

          <MdNotificationsActive />
          <div className="imgProfile">
            <img src={myprofile} alt="profile" />
          </div>
        </div>
      </nav>
    </header>
  );
};

/**
 * *this contains all the header links
 */
