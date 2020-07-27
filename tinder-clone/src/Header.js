import React from "react";

import PersionIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";

//
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <PersionIcon className="header__icon" fontSize="large" />
      <img
        className="header__logo"
        src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo-768x432.png"
        alt=""
      />
      <ForumIcon className="header__icon" fontSize="large" />
    </div>
  );
}

export default Header;
