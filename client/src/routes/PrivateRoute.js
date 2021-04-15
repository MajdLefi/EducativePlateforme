import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  return <Route component={Component} {...rest} />;
};

export default PrivateRoute;
