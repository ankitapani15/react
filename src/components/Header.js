import { useState } from "react";
import { APP_HEADER_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [login, setLogin] = useState("Log in");
  const handleLogin = () => {
    login === "Log in" ? setLogin("Log out") : setLogin("Log in");
  };
  return (
    <div className="flex bg-pink-100 justify-between m-2 border border-pink-700 shadow-2xl">
      <div className="w-25 p-2">
        <img className="img-logo" src={APP_HEADER_LOGO} alt="img" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 gap-3 items-center">
          <li className="px-3 py-2 rounded text-md font-medium text-gray-700">
            Online Status: {useOnlineStatus() ? "✅" : "🔴"}
          </li>
          <li className="px-3 py-2 rounded hover:bg-gray-50 transition text-md font-medium text-gray-700">
            <Link to="/" className="hover:text-pink-500">
              Home
            </Link>
          </li>
          <li className="px-3 py-2 rounded hover:bg-gray-50 transition text-md font-medium text-gray-700">
            <Link to="/about" className="hover:text-pink-500">
              About us
            </Link>
          </li>
          <li className="px-3 py-2 rounded hover:bg-gray-50 transition text-md font-medium text-gray-700">
            <Link to="/contact" className="hover:text-pink-500">
              Contact
            </Link>
          </li>
          <li className="px-3 py-2 rounded hover:bg-gray-50 transition text-md font-medium text-gray-700">
            Cart
          </li>
          <button
            className="px-4 py-2 font-semibold rounded text-black hover:bg-pink-200 bg-red-200 transition text-sm"
            onClick={handleLogin}
          >
            {login}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
