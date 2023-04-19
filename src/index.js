// React
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// CSS
import "./index.css";
// App
import App from "./App";

// Context
import { AuthWrapper } from './context/auth.context';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<React.StrictMode>
  <BrowserRouter>
    <AuthWrapper>
      <App />
    </AuthWrapper>
  </BrowserRouter>
  // </React.StrictMode>
);

