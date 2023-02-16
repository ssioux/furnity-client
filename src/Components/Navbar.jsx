// CSS
import "../css/navbar.css"
// React
import {Link, useNavigate} from "react-router-dom"
// Context
import {useContext} from "react";
import {AuthContext} from "../context/auth.context"


function Navbar() {
  const navigate = useNavigate();
  const { authenticateUser } = useContext(AuthContext);

  const handleLogout = () => {
    // Removes the token from local storage
    localStorage.removeItem("authToken");
    // Reload the data from user
    authenticateUser();
  }
  return (
    <section className="navbar animation">

            <Link to="/">HOME</Link>
            <Link to="/categories">CATEGORIES</Link>
            <Link to="/profile">PROFILE</Link>
            <Link to="/" onClick={handleLogout}>LOGOUT</Link>
            <Link to="/signup">SIGNUP</Link>
            <Link to="/login">LOGIN</Link>

    </section>
  )
}

export default Navbar