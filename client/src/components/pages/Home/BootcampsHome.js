import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { getBootcamps } from "../../../js/actions/bootcampActions";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "./BootcampsHome.css";
import BootcampCardHome from "./BootcampCardHome";
function BootcampsHome() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBootcamps());
  }, []);
  const bootcamps = useSelector((state) => state.bootcampsReducer.bootcamps);
  console.log(bootcamps);
  return (
    <div className="btcmpsContainer">
      <Navbar />
      <div className="btcmpsBckPage flex-center">
        <h2 className="homeSlogan">Welcome to our page</h2>
        <p className="homeDesc">Boost your skills!</p>
      </div>

      <div className="sloganContainer2 flex-center2">
        <h4>Trends</h4>
        <h4>Innovation</h4>
        <h4>Motivation</h4>
      </div>

      <div className="btcmpsListContainer">
        <div className="filtersContainer">
          <h4 className="filterTitle">Filters</h4>
          {/* <i class="fas fa-sliders-h"></i>
          <FormGroup check className="checkContainer">
            <Label check>
              <Input type="checkbox" /> Check me out
              <Input type="checkbox" /> Check me out
              <Input type="checkbox" /> Check me out
              <Input type="checkbox" /> Check me out
              <Input type="checkbox" /> Check me out
              <Input type="checkbox" /> Check me out
              <Input type="checkbox" /> Check me out
            </Label>
          </FormGroup> */}
        </div>

        <div className="btcmpsListHome">
          <div className="btcmpsCards">
            {bootcamps.map((bootcamp, id) => (
              <BootcampCardHome key={bootcamp._id} bootcamp={bootcamp} />
            ))}
          </div>
        </div>
      </div>
      <div className="footerContainer">
        <div className="aboutUsContainer">
          <div className="logoAndDesc">
          <img
              width="80px"
              height="80px"
              src="https://upload.wikimedia.org/wikipedia/fr/a/ad/Logo_Ed.png"
              alt="here"
            />
            <p>
              Ed.tn est une plateforme en ligne spécialisée dans la vente
              <br /> de cours en vidéo. Grâce à Ed.tn, vous allez pouvoir
              <br /> apprendre tout ce que vous voulez et celà peu importe où vous
            </p>

            <div className="followUsFooter">
              <div className="followUsTxt">
                <h4>Follow us </h4>
              </div>
              <div className="iconsFooter">
                <ul>
                  <li>
                    <i class="fab fa-facebook-f" id="iconFb"></i>
                  </li>
                  <li>
                    <i class="fab fa-twitter"></i>
                  </li>
                  <li>
                    <i class="fab fa-linkedin-in" id="iconLink"></i>
                  </li>
                  <li>
                    <i class="fab fa-youtube" id="iconYou"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BootcampsHome;
