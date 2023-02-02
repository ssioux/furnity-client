// CSS
import "../css/navbar.css"
// React
import {Link} from "react-router-dom"


function Navbar() {
  return (
    <section className="navbar animation">

       
            <Link to="/">HOME</Link>
            <Link to="/categories">CATEGORIES</Link>
            <Link to="/profile">PROFILE</Link>
            <Link to="/logout">LOGOUT</Link>
            <Link to="/signup">SIGNUP</Link>
            <Link to="/login">LOGIN</Link>

    </section>
  )
}

export default Navbar