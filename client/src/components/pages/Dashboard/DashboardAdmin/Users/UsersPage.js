import React from 'react'
import SideBar from "../../SideBar/SideBar";
import NavBarDash from "../../NavBar/NavBarDash";
import UsersList from "../Users/UsersList/UsersList"
function UsersPage() {
    return (
        <div className="containerDashboard">
        <NavBarDash />
        <UsersList/>
        <SideBar />
      </div>
    )
}

export default UsersPage
