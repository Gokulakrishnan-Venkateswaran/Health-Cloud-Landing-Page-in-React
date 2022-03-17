import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import classes from "./Navbar.module.css";
import Logo from "../../assets/health cloud logo-02.svg";

const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#about">About</a></p>
  <p><a href="#solution">Solutions</a></p>
  <p><a href="#security">Security</a></p>
  <p><a href="#blog">Community</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className={classes.navbar}>
      <div className={classes.navbar_container}>
        <div className={classes.logo}>
          <img src={Logo} alt="logo" />
        </div>
        <div className={classes.navbar_links}>
          <Menu />
        </div>
      </div>
      <div className={classes.navbar_sign}>
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className={classes.menubar}>
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className={`scale-up-center ${classes.menubar_container}`}>
            <div className={classes.menubar_links}>
              <Menu />
            </div>
            <div className={classes.menubar_sign}>
               <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
