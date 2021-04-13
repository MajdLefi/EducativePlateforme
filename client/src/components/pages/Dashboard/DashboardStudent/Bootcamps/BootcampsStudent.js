import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBootcamps } from "../../../../../js/actions/bootcampActions";
import { Badge } from 'reactstrap';
import NavBarDash from "../../NavBar/NavBarDash";
import MainDash from "../../Main/MainDash";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "reactstrap";
import './BootcampsStudent.css'
import BootcampsListStudent from './BootcampsList/BootcampsListStudent';
const BootcampsStudent = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBootcamps());
  }, []);
  const bootcamps = useSelector((state) => state.bootcampsReducer.bootcamps);
  console.log(bootcamps);

  return (
    <div className="containerDashboard">
      <NavBarDash />
      <BootcampsListStudent/>
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
              <i class="far fa-user-circle"></i> Dashboard
            </Link>
            <Link to="/dash/MyBootcamps">
            <i class="fas fa-graduation-cap"></i> Bootcamps
            </Link>
          </nav>
        </div>
      </motion.div>
    </div>
  );
}

export default BootcampsStudent
