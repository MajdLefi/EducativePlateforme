import React, { useEffect, useState, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./NavBarDash.css";
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

import { getCurrentUser } from "../../../../js/actions/userActions";
import LoginModal from "../../../auth/LoginModal";
import RegisterModal from "../../../auth/RegisterModal";
import { logout } from "../../../../js/actions/authActions";

const NavBarDash = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const user = useSelector((state) => state.authReducer.user);

  const toggle = () => setIsOpen(!isOpen);

  const logoutUser = () => {
    dispatch(logout());
  };

  const authLinks = (
    <Fragment className="navdash-items">
      <NavItem>
        <Link to="/dashboard">
          <span className="navbar-text mr-3">
            <strong className="userNameNav1">
              {user ? `Welcome ${user.firstName}` : null}
            </strong>
          </span>
        </Link>
      </NavItem>
      <NavLink className="userNameNav2" id="userNameNav2" href="/" onClick={logoutUser}>
        {" "}
        Logout
      </NavLink>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <NavItem>
        <RegisterModal />
      </NavItem>
      <NavItem>
        <LoginModal />
      </NavItem>
    </Fragment>
  );

  return (
    <div>
      <Navbar color="white" dark expand="sm" className="mb-5" id="navDash">
        <Container>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {isAuth ? authLinks : guestLinks}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default NavBarDash;
