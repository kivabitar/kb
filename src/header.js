import React from "react";
import Link from "./link";
import Nav from "./nav";
//import MobileMenu from "./menu";


const Header = ({ state }) => {
  return (
    <header className="header" role="banner">

      <div id="inner-header" className="head-wrap">

        <p id="logo" className="h1" ><a href="https://kivab.com" ><img src="https://wp.kivab.com/wp-content/themes/kivab/library/images/kb_lrg.png" alt="kivab.com" title="kivab.com" /></a></p>


        <nav role="navigation" className="main-navigation">
          <a href="" id="mobile-nav">
            <img src="https://wp.kivab.com/wp-content/themes/kivab/library/images/mobile.png" />
          </a>
          <div className="m-nav">
            <Nav />
          </div>
        </nav>

      </div>

    </header>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default Header;
