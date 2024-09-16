import { APP_HEADER_LOGO } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="img-container">
        <img className="img-logo" src={APP_HEADER_LOGO} />
      </div>
      <div className="menu-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
