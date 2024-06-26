import React from "react";
import { Footer } from "./components"
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Helmet from "react-helmet";
import {
  Home,
  Cercle,
  Events,
  Actions,
  Folklore,
  Members,
  Notion,
  NotFound,
  History,
  Journal,
} from "./routes";
//import theme from "./utils/theme";

import "./assets/css/style.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

library.add(fab);
library.add(fas);

// eslint-disable-next-line
export default () => {
  return (
    <Router basename="/">
        <Helmet></Helmet>

        <Routes>
          <Route path="/"
            element = {<Home />} />
          <Route path="/cercle"  
            element = {<Cercle />} />
            <Route path="/cercle/journal"
              element = {<Journal />} />
            <Route path="/cercle/history"
              element = {<History />} />
          <Route path="/events"  
            element = {<Events />} />
          <Route path="/actions"  
            element = {<Actions />} />
          <Route path="/folklore"  
            element = {<Folklore />} />
          <Route path="/members"  
            element = {<Members />} />
          <Route path="/notion"  
            element = {<Notion />} />
          <Route path="*"
            element = {<NotFound />} />
        </Routes>

        <Footer />
    </Router>
  );
};
