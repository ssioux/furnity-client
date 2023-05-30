// React
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// CSS imports
import "./index.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
// App
import App from "./App";

// Context
import { AuthWrapper } from "./context/auth.context";

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
