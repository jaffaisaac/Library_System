import React from "react";
import { MdNotificationsActive } from "react-icons/md";
import myprofile from "../assets/download.jpg";
import { NavLink } from "react-router-dom";
export const Header = () => {
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
          <div className="dropdown">
            <span className="dropdownHeader">BookTransactions</span>
            <div className="dropdown-content">
              <NavLink to="addbook" className="mylinks">
                AddBoook
              </NavLink>
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

          <div className="dropdown">
            <span className="dropdownHeader">UserType</span>
            <div className="dropdown-content">
              <NavLink to="students" className="mylinks" end>
                All students
              </NavLink>
              <NavLink to="teachers" className="mylinks" end>
               All teacher
              </NavLink>
              <NavLink to='registerteacher' className="mylinks" end >Register TR</NavLink>
            </div>
          </div>

          <div className="dropdown">
            <span className="dropdownHeader">BookTransactions</span>
            <div className="dropdown-content">
              <NavLink to="borrowbooks" className="mylinks">
                borrowbooks
              </NavLink>
              <NavLink to="returedbooks" className="mylinks">
                returedbooks
              </NavLink>
            </div>
          </div>
        </div>

        {/* search bar section */}
        <div className="searchBar">
          <input type="search" />
        </div>
        {/* userManagment section */}
        <div className="UserManagement">
          <NavLink to="login" end>
            {" "}
            Login
          </NavLink>
          <NavLink to="register" end>
            Register{" "}
          </NavLink>
          <a href="#">LogOut</a>
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
