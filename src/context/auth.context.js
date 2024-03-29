// React hooks
import { createContext, useState, useEffect } from "react";
// Services
import { verifyService } from "../services/auth.services";
// Snipper Loading
import GridLoader from "react-spinners/GridLoader";

const AuthContext = createContext();

function AuthWrapper(props) {
  // * Global States
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    authenticateUser();
  }, []);

  const authenticateUser = async () => {
    setIsFetching(true);
    try {
      const response = await verifyService();

      setIsLoggedIn(true);

      setUser(response.data);
      
      setIsFetching(false);
    } catch (error) {
      setIsLoggedIn(false);
      setUser(null);
      setIsFetching(false);
    }
  };

  const passedContext = {
    isLoggedIn,
    user,
    authenticateUser,
    setIsLoggedIn,
    setUser,
  };

  if (isFetching === true) {
    return (
      <div className="centered-container">
         <GridLoader
                color="rgb(21, 21, 170)"
                loading
                margin={10}
                size={15}
                speedMultiplier={1}
                className="loader"
              />
      </div>
    );
  }

  return (
    <AuthContext.Provider value={passedContext}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthWrapper };
