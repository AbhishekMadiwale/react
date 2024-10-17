import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RED_DOT, GREEN_DOT } from "../utils/constants";
const Header = () => {
  // let btnName = "Login";

  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    // console.log("Header Rendering");
  }, [btnNameReact]);

  return (
    <div className="flex justify-between shadow-lg sm:bg-yellow-500 md:bg-green-500 lg:bg-pink-100">
      <div className="logo-Container">
        <img className="w-60" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 ">
          <li className="px-4 flex justify-evenly">
            Online Status :
            {onlineStatus ? (
              <img className="status_logo h-5 " src={GREEN_DOT} />
            )
             : (
              <img className="status_logo h-5" src={RED_DOT} />
            )}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">Cart</Link>
          </li>
          <button
            className="px-4 "
            // className="login-btn"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
