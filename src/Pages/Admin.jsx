// CSS
import "../css/admin.css"
// React
import {Link} from "react-router-dom"

function Admin() {
  return (
    <section className="adminNav">

            <Link to="/admin/new-category">New Category</Link>
            <Link to="/admin/new-furniture">New Furniture</Link>
            <Link to="/admin/orders">Orders</Link>
            <Link to="/admin/clients">Clients</Link>

    </section>


  )
}

export default Admin