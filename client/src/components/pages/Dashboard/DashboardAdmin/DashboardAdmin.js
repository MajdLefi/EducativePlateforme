import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SideBar from "../SideBar/SideBar";
import NavBarDash from "../NavBar/NavBarDash";
import MainDash from "../Main/MainDash"
import './DashboardAdmin.css'
import {getUsers} from '../../../../js/actions/userActions'
const DashboardAdmin = () => {
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const bootcamps = useSelector((state)=>state.bootcampsReducer.bootcamps)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div className="containerDashboard">
      <NavBarDash className="NavBarDash"/>
      <MainDash/>
      <SideBar />
    </div>
  );
};

export default DashboardAdmin;