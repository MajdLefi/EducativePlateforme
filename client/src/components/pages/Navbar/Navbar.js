import React, { useState, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const user = useSelector((state) => state.authReducer.user);
  const authLinks = (
    <Fragment>
      <Link to="/dashboard">
        <span className="navbar-text mr-3">
          <strong>{user ? `Welcome ${user.name}` : null}</strong>
        </span>
      </Link>
    </Fragment>
  );
  return (
    <div className="navBarContainer">
      <header className="headerContainer">
        <div className="logo">
          <Link to={{ pathname: "/" }}>
            <img
              width="80px"
              height="80px"
              src="https://upload.wikimedia.org/wikipedia/fr/a/ad/Logo_Ed.png"
            />
          </Link>
        </div>
        <nav className="navbarItems">
          <ul>
            <Link to={{ pathname: "/Bootcamps" }}>
              <li className="navItem">
                <a href="#!">
                  {" "}
                  <span>
                    <i class="fas fa-graduation-cap" id="iconBtnCnx"></i>
                  </span>
                  Bootcamps
                </a>
              </li>
            </Link>
            <Link to={{ pathname: "/auth" }}>
              <li className="btncnx">
                <a href="#!">
                  <span>
                    <i class="fas fa-user" id="iconBtnCnx"></i>
                  </span>
                  Connexion
                </a>
              </li>
            </Link>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
