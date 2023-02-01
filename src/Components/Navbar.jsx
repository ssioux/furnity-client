// CSS
import "../css/navbar.css"
// React
import {Link} from "react-router-dom"


function Navbar() {
  return (
    <section className="navbar">
        <div className="navbar-list">
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/categories">CATEGORIES</Link></li>
            <li><Link to="/profile">PROFILE</Link></li>
            <li><Link to="/logout">LOGOUT</Link></li>
            <li><Link to="/signup">SIGNUP</Link></li>
            <li><Link to="/login">LOGIN</Link></li>
          </ul>
        </div>
    </section>
  )
}

export default Navbar