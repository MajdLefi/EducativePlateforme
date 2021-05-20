import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../../js/actions/authActions";
import "./SideBar.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";
//https://github.com/MajdLefi/EducativePlateforme.git
const SideBar = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const user = useSelector((state) => state.authReducer.user);
  const logoutUser = () => {
    dispatch(logout());
  };
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
          <NavLink href="/" onClick={logoutUser}>
            <i class="fas fa-sign-out-alt"></i> Log out
          </NavLink>
        </nav>
      </div>
    </motion.div>
  );
};

export default SideBar;
