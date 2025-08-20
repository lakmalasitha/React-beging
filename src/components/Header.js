import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header = () => {
  const [btnName, setBtnName] = useState("login");

  const onlineState = useOnlineStatus();

  return (
    <div className="flex justify-between shadow-2xl">
      <div className="logo-item">
        <Link to={"/"}>
          <img className="w-25 mix-blend-multiply " src={LOGO_URL} />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-5">online Statue : {onlineState ? "💚" : "😫"}</li>
          <li className="px-5">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-5">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="px-5">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li className="px-5">Cart</li>
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
