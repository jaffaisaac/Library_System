import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import {  Allroutes} from "./myroutes/Allroutes";
import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'
function App() {
  const [userType, setuserType] = useState(null);
  const navigate = useNavigate();
  // *use of localstore
  useEffect( 
    ()=>{
      const storedUserType = localStorage.getItem('userType');
      if(storedUserType){
        setuserType(storedUserType)
      }
    },[])

  // *finction to  handle succesfull login
  const handleLogin=(loggedInUserType)=>{
    setuserType(loggedInUserType)
    localStorage.setItem('userType',loggedInUserType);
  }
  ///*handle logOut
  const handleLogout=()=>{
    localStorage.removeItem('userType');
    setuserType(null);
    navigate('/')

  }
  return (
    <div className="App">
      <Header userType={userType}  logOut={handleLogout}/>
        <main>
         <Allroutes onlogin={handleLogin}/>
        </main>
      <Footer/>
    </div>
  );
}

export default App;
