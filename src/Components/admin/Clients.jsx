// CSS
import "../../css/admin.css";
// React
import { Link } from "react-router-dom";

function Clients() {
  return (
    <div className="general-admin">
      <section className="adminNav">
        <Link to="/admin/new-category">New Category</Link>
        <Link to="/admin/new-furniture">New Furniture</Link>
        <Link to="/admin/orders">Orders</Link>
        <Link to="/admin/clients">Clients</Link>
      </section>
      <section className="general-container">
        <div className="form-container">
          <form>
            <h3>Client List</h3>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Clients;
