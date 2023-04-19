// CSS
import "../../css/navbar.css"

import styled from 'styled-components';
import Burger from "./Burger"

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
  }`

function Navbar() {


  
  return (
    <Nav className="navbar animation">
         <div className="logo">
        Nav Bar
      </div>
            <Burger />

    </Nav>
  )
}

export default Navbar