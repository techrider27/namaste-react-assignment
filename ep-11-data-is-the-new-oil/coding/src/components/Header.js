import logo from "../../img/logo.png";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [login, setLogin] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);

  return (
    <div className="header bg-black px-8 lg:px-10 xl:px-20 text-white flex justify-between py-4">
      <div className="logo-container">
        <img className="w-auto h-28" src={logo}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex">
          <li>OnlineStatus: {onlineStatus ? "✅" : "😥"}</li>
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-2">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-2">Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              login == "Login" ? setLogin("Logout") : setLogin("Login");
            }}
          >
            {login}
          </button>
          <li className="px-2 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
