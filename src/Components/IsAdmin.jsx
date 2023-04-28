
// React context
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
// Router Dom
import { Navigate } from "react-router-dom";

function IsAdmin(props) {

  const { isLoggedIn, user } = useContext(AuthContext);
  
// verify if user is logged and also if is an admin.
  if (isLoggedIn === true && user.role === "admin") {
    return props.children;
  } else {
    return <Navigate to="/categories" />;
  }
}

export default IsAdmin;
