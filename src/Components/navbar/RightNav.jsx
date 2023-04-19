import styled from 'styled-components';
// React
import {Link} from "react-router-dom"
// Context
import {useContext} from "react";
import {AuthContext} from "../../context/auth.context"

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
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
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

const RightNav = ({ open }) => {

  const { authenticateUser } = useContext(AuthContext);

  const handleLogout = () => {
    // Removes the token from local storage
    localStorage.removeItem("authToken");
    // Reload the data from user
    authenticateUser();
  }
  return (
    <Ul open={open}>
            <Link to="/"><li>HOME</li></Link>
            <Link to="/categories"><li>CATEGORIES</li></Link>
            <Link to="/profile"><li>PROFILE</li></Link>
            <Link to="/" onClick={handleLogout}><li>LOGOUT</li></Link>
            <Link to="/signup"><li>SIGNUP</li></Link>
            <Link to="/login"><li>LOGIN</li></Link>
            <Link to="/admin"><li>ADMIN</li></Link>
    </Ul>
  )
}

export default RightNav