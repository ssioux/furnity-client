// CSS
import "../css/navbar.css"
// React
import {Link} from "react-router-dom"


function Navbar() {
  return (
    <section className="navbar">
        <div className="navbar-list">
        <ul>
            <li><Link to="">HOME</Link></li>
            <li><Link to="">CATEGORIES</Link></li>
            <li><Link to="">PROFILE</Link></li>
            <li><Link to="">LOGOUT</Link></li>
            <li><Link to="">SIGNUP</Link></li>
            <li><Link to="">LOGIN</Link></li>
           

        </ul>
</div>
    </section>
  )
}

export default Navbar