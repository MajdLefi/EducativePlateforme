import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../../../../../js/actions/userActions";
import UserCard from "../UsersCard/UserCard";
import { InputGroup, InputGroupAddon, Input, Button } from "reactstrap";

import "./UsersList.css";
import AddUser from "../../../../../Modals/Users/AddUser/AddUser";

const UsersList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  const users = useSelector((state) => state.usersReducer.users);

  const handleChange = (event) => setSearch(event.target.value);
  const [search, setSearch] = useState("");
  return (
    <div className="u">
      <div className="addAndSearch">
        <AddUser
        />
        <InputGroup className="srchBarUser" onChange={handleChange}>
          <Input placeholder="Enter the name of user" />
          <div>
            <InputGroupAddon addonType="append">
              <Button color="secondary">
                <i class="fas fa-search"></i>
              </Button>
            </InputGroupAddon>
          </div>
        </InputGroup>
      </div>
      <div className="usersList">
        {users
          .filter((user) =>
            user.firstName.toLowerCase().includes(search.toLowerCase())
          )
          .map((user) => (
            <UserCard key={user._id} user={user} />
          ))}
      </div>
    </div>
  );
};

export default UsersList;
