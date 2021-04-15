import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import img11 from "../../../images/img11.jpg";
import img12 from "../../../images/img12.jpg";
import img13 from "../../../images/img13.jpg";
import imgReview1 from "../../../images/imgReview1.png";
import imgReview2 from "../../../images/imgReview2.png";
import imgReview3 from "../../../images/imgReview3.png";
import imgReview4 from "../../../images/imgReview4.png";
import "./Home.css";
function Home() {
  return (
    <div className="homeContainer">
      <Navbar />
      <div className="homebg flex-center">
        <h2 className="homeSlogan">Welcome to our website</h2>
        <p className="homeDesc">Boost your skills!</p>
      </div>
      <div className="sloganContainer flex-center2">
        <h4>Trends</h4>
        <h4>Innovation</h4>
        <h4>Motivation</h4>
      </div>
      <div className="carouselContainer">
        <div className="btcmpText">
          <h2>Bootcamps to switch your career ! </h2>
          <p>Description..</p>
        </div>
        <div className="carouselHome">
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={img11} alt="First slide" />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={img12} alt="Second slide" />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={img13} alt="Third slide" />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <div className="btnBtcmpHome">
            <Link to={{ pathname: "/Bootcamps" }}>
              <Button className="btnHome">All bootcamps</Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="reviewsContainer">
        <div className="reviewText">
          <h3>Reviews</h3>
          <p>They said about us..</p>
        </div>
        <div className="reviewCards">
          <div className="reviewCard">
            <p>Mayssa</p>
            <div className="imgReviewContainer"></div>
            <img className="imgReview" src={imgReview2} alt="" />
            <p>Thnxx a lot ! </p>
          </div>
          <div className="reviewCard">
            <p>Karim</p>
            <div className="imgReviewContainer"></div>
            <img className="imgReview" src={imgReview1} alt="" />
            <p>Now I am a junior freelancer :D</p>
          </div>
          <div className="reviewCard">
            <p>Rima</p>
            <div className="imgReviewContainer"></div>
            <img className="imgReview" src={imgReview3} alt="" />
            <p>It's a new experience for me !</p>
          </div>
          <div className="reviewCard">
            <p>Amin</p>
            <div className="imgReviewContainer"></div>
            <img className="imgReview" src={imgReview4} alt="" />
            <p>Thank youuu Ed.tn !!</p>
          </div>
        </div>
      </div>
      <div className="followUsContainer">
        <div className="followUsText">
          <h3>Follow Us on social media</h3>
        </div>
        <div className="followUsItems">
          <ul>
            <li>
              <a href="#">
                <i class="fab fa-facebook-f" id="iconFb"></i>
              </a>
            </li>

            <li>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
            </li>

            <li>
              <a href="#">
                <i class="fab fa-linkedin-in" id="iconLink"></i>
              </a>
            </li>

            <li>
              <a href="#">
                <i class="fab fa-youtube" id="iconYou"></i>
              </a>
            </li>
          </ul>
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
              <br /> apprendre tout ce que vous voulez et celà peu importe où
              vous
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

        <div className="contactUsFooterContainer">
          <h4 className="contactUsText">Contact Us</h4>
          <div className="contactUsIcons">
            <ul>
              <li>
                <i class="fas fa-mobile-alt"> +216 51 80 08 38</i>
              </li>
              <li>
                <i class="far fa-envelope"> contact@study.tn</i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
