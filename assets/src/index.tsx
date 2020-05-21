import "core-js";
import "regenerator-runtime/runtime";
import * as React from "react";
import * as ReactDOM from "react-dom";
import Header from "./components/Header/Header";
import Contents from "./components/Contents/Contents";
import Footer from "./components/Footer/Footer";
import "react-milligram";
import "milligram";
import "./styles/global.scss";
import "./styles/nomalize.scss"

ReactDOM.render(

  <React.Fragment>
    <article>
      <Header name="Resolt" />
      <Contents />
      <Footer />
    </article>
  </React.Fragment>,
  document.getElementById("app")
);