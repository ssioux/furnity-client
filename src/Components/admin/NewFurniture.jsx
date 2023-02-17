// CSS
import "../../css/admin.css"

// React
import {Link} from "react-router-dom"

function NewFurniture() {
  return (
    <div>
    <section className="adminNav">

    <Link to="/admin/new-category">New Category</Link>
    <Link to="/admin/new-furniture">New Furniture</Link>
    <Link to="/admin/orders">Orders</Link>
    <Link to="/admin/clients">Clients</Link>

    </section>
    <section>
        <h1>New-Furniture</h1>
    </section>
    </div>

  )
}

export default NewFurniture