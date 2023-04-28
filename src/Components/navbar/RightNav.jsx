import styled from "styled-components";
import "../../css/navbar.css";
// React
import { Link } from "react-router-dom";
// Context
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 19;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open, setOpen }) => {
  const { authenticateUser, isLoggedIn, user } = useContext(AuthContext);

  const handleLogout = () => {
    // Removes the token from local storage
    localStorage.removeItem("authToken");
    // Reload the data from user
    authenticateUser();
  };

  return (
    <Ul open={open} className="navbar animation">
      {isLoggedIn ? (
        <>
          <Link to="/" onClick={() => setOpen(!open)}>
            <li>HOME</li>
          </Link>
          <Link to="/categories" onClick={() => setOpen(!open)}>
            <li>CATEGORIES</li>
          </Link>
          <Link to="/profile" onClick={() => setOpen(!open)}>
            <li>PROFILE</li>
          </Link>
          <Link to="/" onClick={handleLogout}>
            <li>LOGOUT</li>
          </Link>
          {user.role === "admin" && <Link to="/admin" onClick={() => setOpen(!open)}>
            <li>ADMIN</li>
          </Link>}
          
        </>
      ) : (
        <>
          <Link to="/" onClick={() => setOpen(!open)}>
            <li>HOME</li>
          </Link>
          <Link to="/categories" onClick={() => setOpen(!open)}>
            <li>CATEGORIES</li>
          </Link>
          <Link to="/signup" onClick={() => setOpen(!open)}>
            <li>SIGNUP</li>
          </Link>
          <Link to="/login" onClick={() => setOpen(!open)}>
            <li>LOGIN</li>
          </Link>
        </>
      )}
    </Ul>
  );
};

export default RightNav;
