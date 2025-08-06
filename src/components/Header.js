import { LOGO_URL } from "../utils/constants";

export const Header = () => {
  return (
    <div className="header">
      <div className="logo-item">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li className="Home">Home</li>
          <li className="About Us">About Us</li>
          <li className="Contact Us">Contact Us</li>
          <li className="Cart">Cart</li>
        </ul>
      </div>
    </div>
  );
};
