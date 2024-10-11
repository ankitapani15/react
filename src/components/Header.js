import { useState } from "react";
import { APP_HEADER_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [login, setLogin] = useState("Log in");
  const handleLogin = () => {
    login === "Log in" ? setLogin("Log out") : setLogin("Log in");
  };
  return (
    <div className="header">
      <div className="img-container">
        <img className="img-logo" src={APP_HEADER_LOGO} />
      </div>
      <div className="menu-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
          <button className="login-btn" onClick={handleLogin}>
            {login}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
