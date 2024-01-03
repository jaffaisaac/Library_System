import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import {  Allroutes} from "./myroutes/Allroutes";
function App() {
  return (
    <div className="App">
      <Header/>
        <main>
         <Allroutes/>
        </main>
      <Footer/>
    </div>
  );
}

export default App;
