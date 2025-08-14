import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [btnName, setBtnName] = useState("login");

  return (
    <div className="header">
      <div className="logo-item">
        <Link to={"/"}>
          <img className="logo" src={LOGO_URL} />
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          <li className="Home">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="About Us">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="Contact Us">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li className="Cart">Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              btnName == "login" ? setBtnName("logout") : setBtnName("login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
