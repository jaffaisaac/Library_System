import { BookCategory } from "../pages/BookCategory"
import { AddBook } from "../pages/AddBook";
import { AllBooks } from "../pages/AllBooks";
import { BookShef } from "../pages/BookShef"
import { BorrowBooks } from "../pages/BorrowBooks"
import  {ReturnBooks} from '../pages/ReturnBooks';
import { Students } from "../pages/Students";
import { Teachers } from "../pages/Teachers";
import { Loginpage } from "../pages/Loginpage";
import { RegistorPage } from "../pages/RegistorPage";
import { Home } from "../pages/Home";
import {Routes,Route} from 'react-router-dom';
import { DetailsBook } from "../pages/DetailsBook";
import { TeacherRegistor } from "../pages/TeacherRegistor";
export const Allroutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="addbook" element={<AddBook/>}/>
            <Route path="allbooks" element={<AllBooks/>}/>
            <Route path="Bookcategory" element={<BookCategory/>} />
            <Route path="Bookshelf" element={<BookShef/>} />
            {/** under UserType tab  */}
            <Route path="students" element={<Students/>} />
            <Route path="teachers" element={<Teachers/>}/> 
            <Route path="registerteacher" element={<TeacherRegistor/>}/>
            {/** under BooksIN/Out */}
            <Route path="borrowbooks" element={<BorrowBooks/>}/>
            <Route path="returedbooks" element={<ReturnBooks/>}/>
                {/* no how to manage login /register and logOyut */}
            <Route path="register" element={<RegistorPage/>}/>
            <Route path="login" element={<Loginpage/>}/>


            {/* special links not on NavBar */}
            <Route path="detialsbook" element={<DetailsBook/>}/>
        </Routes>
    </>
  )
}
