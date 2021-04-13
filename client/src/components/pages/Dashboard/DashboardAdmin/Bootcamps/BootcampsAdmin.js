import React from "react";
import SideBar from "../../SideBar/SideBar";
import NavBarDash from "../../NavBar/NavBarDash";
import BootcampListAdmin from "./BootcampsList/BootcampsListAdmin"
import './BootcampsAdmin.css'
function BootcampsAdmin() {
  return (
    <div className="containerDashboard">
      <NavBarDash />
      <BootcampListAdmin/>
      <SideBar />
    </div>
  );
}

export default BootcampsAdmin;
