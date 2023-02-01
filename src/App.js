
import './App.css';
// React
import {Route, Routes} from "react-router-dom"
// Components
import Navbar from './Components/Navbar';
// Pages
import Home from './Pages/Home';
import Categories from './Pages/Categories';
import Profile from './Pages/Profile';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import NotFound from './Pages/NotFound';
import Error from './Pages/Error';



function App() {
  return (
    <div className="App">

      <div id="logo-banner">
        <img src="../images/furnity-logo.png" alt="furnity-logo" />
      </div>
      <Navbar/>
<Routes>

  <Route path="/" element={<Home />} />
  <Route path="/categories" element={<Categories/>}/>
               {/* Auth Routes */}
  <Route path="/profile" element={<Profile/>}/>
  <Route path="/signup" element={<Signup/>}/>
  <Route path="/login" element={<Login/>}/>

               {/* Error Routes */}
  <Route path="/error" element={<Error/>}/>
  <Route path="*" element={<NotFound/>}/>



 
</Routes>
    
    </div>
  );
}

export default App;
