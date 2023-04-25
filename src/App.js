import "./App.css";
// React
import { Route, Routes } from "react-router-dom";
// Components
import Navbar from "./Components/navbar/Navbar";
import IsPrivate from "./Components/IsPrivate";
import IsAdmin from "./Components/IsAdmin";
import Clients from "./Components/admin/Clients";
import NewFurniture from "./Components/admin/NewFurniture";
import Orders from "./Components/admin/Orders";
import NewCategory from "./Components/admin/NewCategory";
// Pages
import Home from "./Pages/Home";
import Categories from "./Pages/Categories";
import Profile from "./Pages/Profile";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import NotFound from "./Pages/NotFound";
import Error from "./Pages/Error";
import Admin from "./Pages/Admin";

function App() {
  return (
    <div className="App">
      <div id="logo-banner">
        <img src="../images/furnity-logo.png" alt="furnity-logo" />
      </div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        {/* Auth Routes */}
        <Route
          path="/profile"
          element={
            <IsPrivate>
              {" "}
              <Profile />{" "}
            </IsPrivate>
          }
        />
        <Route
          path="/admin"
          element={
            <IsAdmin>
              {" "}
              <Admin />{" "}
            </IsAdmin>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Admin Routes */}
        <Route path="/admin/new-category" element={<NewCategory />} />
        <Route path="/admin/new-furniture" element={<NewFurniture />} />
        <Route path="/admin/orders" element={<Orders />} />
        <Route path="/admin/clients" element={<Clients />} />

        {/* Error Routes */}
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
