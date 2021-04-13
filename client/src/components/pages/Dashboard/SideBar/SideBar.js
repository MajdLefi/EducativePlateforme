import { useState } from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SideBar = () => {
  return (
    <motion.div className="sideBarDash">
      <div className="logoContainer">
        <Link to={{ pathname: "/" }}>
          <img
            className="imgLogo"
            src="https://upload.wikimedia.org/wikipedia/fr/a/ad/Logo_Ed.png"
            width="100px"
            height="100px"
          />
        </Link>
      </div>

      <div className="authInput">
        <nav className="menu">
          <Link to="/">
            <i className="fa fa-home"></i> Home
          </Link>
          <Link to="/dashboard">
            <i class="fas fa-user-shield"></i> Dashboard
          </Link>
          <Link to="/dash/users">
            <i className="fa fa-users"></i> Users
          </Link>
          <Link to="/dash/bootcamps">
            <i class="fas fa-graduation-cap"></i> Bootcamps
          </Link>
        </nav>
      </div>
    </motion.div>
  );
};

export default SideBar;
