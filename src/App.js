import React from "react";
import { Navbar } from "./components/";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Helmet from "react-helmet";
import {
  Home
} from "./routes";

import "./assets/css/style.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

library.add(fab);
library.add(fas);

export default () => {
  return (
    <Router basename="/">
        <Helmet></Helmet>
      <Home/>

    </Router>
  );
};
