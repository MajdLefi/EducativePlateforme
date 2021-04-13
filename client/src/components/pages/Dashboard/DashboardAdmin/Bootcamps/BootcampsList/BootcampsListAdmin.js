import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBootcamps } from "../../../../../../js/actions/bootcampActions";
import BootcampsCardAdmin from "../BootcampsCard/BootcampsCardAdmin";
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
import AddBootcamp from "../../../../../Modals/Bootcamps/AddBootcamp/AddBootcamp";
import "./BootcampsListAdmin.css";
const BootcampsAdmin = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBootcamps());
  }, []);
  const bootcamps = useSelector((state) => state.bootcampsReducer.bootcamps);

  const handleChange = (event) => setSearch(event.target.value);
  const [search, setSearch] = useState("");
  return (
    <div>
      <div className="bootcampsContainer">
        <div className="srchBarAndAddBtcmp">
          <AddBootcamp/>
          <InputGroup className="srchBarBtcmp" required onChange={handleChange}>
            <Input placeholder="Ex. Web Development" />
            <div>
              <InputGroupAddon addonType="append">
                <Button color="secondary">
                  <i class="fas fa-search"></i>
                </Button>
              </InputGroupAddon>
            </div>
          </InputGroup>
        </div>
        <div className="btcmpsList">
          {bootcamps
            .filter((bootcamp) =>
              bootcamp.title.toLowerCase().includes(search.toLowerCase())
            )
            .map((bootcamp) => (
              <BootcampsCardAdmin key={bootcamp._id} bootcamp={bootcamp} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default BootcampsAdmin;
