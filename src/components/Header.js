import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-nav">
        <p>Femme Homme Enfant</p>
      </div>
      <div>
        <Link to={`/`}>
          <img
            alt="logo zalando"
            className="header-logo"
            src="https://d2be5ept72nvlo.cloudfront.net/2018/01/logo_zalando_srgb_hor_all-011-768x193.png"
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
