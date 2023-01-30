
import './App.css';
// React
import {Route, Routes} from "react"
// Components
import Navbar from './Components/Navbar';
import Home from './Pages/Home';


function App() {
  return (
    <div className="App">

      <div>
        <img src="../furnity-logo.png" alt="furnity-logo" />
      </div>
      <Navbar/>

      <Home/>
    </div>
  );
}

export default App;
