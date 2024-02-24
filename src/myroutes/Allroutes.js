import { BookCategory } from "../pages/BookCategory";
import { AddBook } from "../pages/AddBook";
import { AllBooks } from "../pages/AllBooks";
import { BookShef } from "../pages/BookShef";
import { BorrowBooks } from "../pages/BorrowBooks";
import { ReturnBooks } from "../pages/ReturnBooks";
import { Students } from "../pages/Students";
import { Teachers } from "../pages/Teachers";
import { Loginpage } from "../pages/Loginpage";
import { RegistorPage } from "../pages/RegistorPage";
import { Home } from "../pages/Home";
import { Routes, Route } from "react-router-dom";
import { DetailsBook } from "../pages/DetailsBook";
import { TeacherRegistor } from "../pages/TeacherRegistor";
import { PageNotFount } from "../pages/PageNotFount";


import {UserBorrow} from '../BorrowTransactions/UserBorrow';
import {BorrowStatus} from '../BorrowTransactions/BorrowStatus';
import {LibTransaction} from '../BorrowTransactions/LibTransaction';



export const Allroutes = ({ onlogin,userType ,selectedBook}) => {
  // * this is to check usersif they have loged in before routing 
  const isAuthenticated =localStorage.getItem('userType' ) !== null;



    return (
    <>
      <Routes>
     

        <Route path="/" element={<Home />} />
      {isAuthenticated ? (
        <>
      <Route path="addbook" element={<AddBook userType={userType} />} />
        <Route path="allbooks" element={<AllBooks userType={userType} />} />
        <Route path="Bookcategory" element={<BookCategory />} />
        <Route path="Bookshelf" element={<BookShef />} />
        {/** under UserType tab  */}
        <Route path="students" element={<Students />} />
        <Route path="teachers" element={<Teachers />} />
        <Route path="registerteacher" element={<TeacherRegistor />} />
        {/** under BooksIN/Out */}
        <Route path="borrowbooks" element={<BorrowBooks />} />
        <Route path="returedbooks" element={<ReturnBooks />} />
        <Route path="*" element={<PageNotFount/>}/>

        {/*borrow and return and  status  */}
        <Route path="UserBorrow" element={<UserBorrow  selectedBook={selectedBook}/>}/>
        <Route path="BorrowStatus" element={<BorrowStatus/>}/>
        <Route path="borrowTransactions" element={<LibTransaction/>}/>
        </>
      ):(
      <>
         <Route path="register" element={<RegistorPage />} />
       <Route path="login" element={<Loginpage onlogin={onlogin} />} />
       <Route path="*" element={<PageNotFount/>}/>
        </>
            )}
       


        {/* special links not on NavBar */}
        <Route path="detialsbook/:id" element={<DetailsBook />} />
      </Routes>
    </>
  );
};
