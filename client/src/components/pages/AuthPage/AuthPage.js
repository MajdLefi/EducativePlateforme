import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "./AuthPage.css";
import { loginUser, registerUser } from "../../../js/actions/authActions";
import { motion } from "framer-motion";

function AuthPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [active, setActive] = useState(false);

  const navbar_variant = {
    hidden: {
      y: "-30vh",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        dealy: 0.2,
        duration: 0.7,
        type: "spring",
      },
    },
  };

  const dispatch = useDispatch();
  const history = useHistory();

  //transition register/login
  const handleActive = () => {
    setActive((o) => !o);
  };

  //login
  const handleLogin = () => {
    dispatch(loginUser({ email, password }));
    history.push("/dashboard");
    setEmail("");
    setPassword("");
  };
  //Register
  const handleRegister = () => {
    const newUser = { firstName, lastName, email, password };
    dispatch(registerUser(newUser));
    history.push("/auth");
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  return (
    <motion.div className="authPageContainer" variants={navbar_variant}>
      <div className={active ? "slidebarAuthActive" : "slidebar"}>
        <div className="logoContainer">
          <img
            className="imgLogo"
            src="https://upload.wikimedia.org/wikipedia/fr/a/ad/Logo_Ed.png"
            width="100px"
            height="100px"
          />
        </div>

        <div className="authInput">
          <form>
            <input
              type="email"
              value={email}
              name="email"
              id="email"
              placeholder="Email"
              className="inputEmail"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              value={password}
              name="password"
              id="password"
              placeholder="Password"
              className="inputEmail"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </form>
        </div>

        <div className="authContainer">
          <button className="btnAuth" onClick={handleLogin}>
            Login
          </button>
          <p>
            New one ?{" "}
            <span className="registerLink" onClick={handleActive}>
              Register
            </span>
          </p>
        </div>
      </div>

      <motion.div
        className={active ? "registerbarActive" : "registerbar"}
        variants={navbar_variant}
        initial="hidden"
        animate="visible"
      >
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
          <form>
            <input
              className="inputEmail"
              placeholder="First Name"
              value={firstName}
              name="firstName"
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              className="inputEmail"
              value={lastName}
              name="lastName"
              placeholder="Last Name"
              type="text"
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <input
              className="inputEmail"
              value={email}
              name="email"
              placeholder="Email"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className="inputEmail"
              type="password"
              value={password}
              name="password"
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </form>
        </div>

        <div className="authContainer">
          <button className="btnAuth" onClick={handleRegister}>
            Register
          </button>
          <p>
            Login now ! {" "}
            <span className="registerLink" onClick={handleActive}>
              Login
            </span>
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default AuthPage;
