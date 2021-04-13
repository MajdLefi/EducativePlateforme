import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SideBar from "./SideBar/SideBar";
import NavBarDash from "../Dashboard/NavBar/NavBarDash";
import MainDash from "../Dashboard/Main/MainDash";
import { getBootcamps } from "../../../js/actions/bootcampActions";
import DashboardAdmin from "./DashboardAdmin/DashboardAdmin";
import DashboardStudent from "./DashboardStudent/DashboardStudent";
import "./Dashboard.css";
const Dashboard = () => {
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const user = useSelector((state) => state.authReducer.user);
  const bootcamps = useSelector((state)=>state.bootcampsReducer.bootcamps)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBootcamps());
  }, []);

  if (user && isAuth && user.role[0] === "Admin") {
    return <DashboardAdmin />;
  } else if (user && isAuth && user.role[0] === "Student") {
    return <DashboardStudent />;
  }

  return <div></div>;
};

export default Dashboard;
