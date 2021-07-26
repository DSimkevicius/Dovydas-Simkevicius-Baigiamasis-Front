import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="https://1000logos.net/wp-content/uploads/2021/06/Topshop-logo.png"
      />
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionOne">Sign In</span>
        </div>
        <div className="header_option">
          <span className="header_optionOne">Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionOne">Prime</span>
        </div>
        <div className="header_optionBasket">
          <ShoppingCartIcon />
          <span className="header_basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
