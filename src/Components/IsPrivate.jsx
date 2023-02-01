
// React context
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
// Router Dom
import { Navigate } from "react-router-dom";

function IsPrivate(props) {

  const { isLoggedIn } = useContext(AuthContext);
// verify if user is logged.
  if (isLoggedIn === true) {
    return props.children;
  } else {
    return <Navigate to="/login" />;
  }
}

export default IsPrivate;
