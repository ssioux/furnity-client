
import './App.css';
// React
import {Route, Routes} from "react-router-dom"
// Components
import Navbar from './Components/Navbar';
// Pages
import Home from './Pages/Home';
import Categories from './Pages/Categories';



function App() {
  return (
    <div className="App">

      <div id="logo-banner">
        <img src="../furnity-logo.png" alt="furnity-logo" />
      </div>
      <Navbar/>
<Routes>

  <Route path="/" element={<Home />} />
  <Route path="/categories" element={<Categories/>}/>
 
</Routes>
    
    </div>
  );
}

export default App;
