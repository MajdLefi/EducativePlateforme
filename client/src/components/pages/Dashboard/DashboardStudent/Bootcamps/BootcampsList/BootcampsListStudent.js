import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBootcamps } from "../../../../../../js/actions/bootcampActions";
import BootcampsCardStudent from "../BootcampsCard/BootcampsCardStudent";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  Input,
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import "./BootcampsListStudent.css";

const BootcampsListStudent = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBootcamps());
  }, []);
  const bootcamps = useSelector((state) => state.bootcampsReducer.bootcamps);
  const handleChange = (event) => setSearch(event.target.value);

  const [search, setSearch] = useState("");

  return (
    <div>
      <div className="users-container">
        <InputGroup className="searchBar" required onChange={handleChange}>
          <Input placeholder="Ex. Web Development" />
          <div>
            <InputGroupAddon addonType="append">
              <Button color="secondary">
                <i class="fas fa-search"></i>
              </Button>
            </InputGroupAddon>
          </div>
        </InputGroup>
        <div className="btcmpsListStudent">
          {bootcamps
            .filter((bootcamp) =>
              bootcamp.title.toLowerCase().includes(search.toLowerCase())
            )
            .map((bootcamp) => (
              <BootcampsCardStudent key={bootcamp._id} bootcamp={bootcamp} />
            ))}
        </div>
      </div>
    </div>
  );
};
export default BootcampsListStudent;
