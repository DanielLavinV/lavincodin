import React from "react";
// window.React = React;
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/app.css";
import Icon from "./images/this_is_me.jpg";
import ProjectCardContainer from "./js/ProjectCardContainer";

console.log("rendering");

ReactDOM.render(
  // <h1>Wololo!</h1>,
  <ProjectCardContainer
    content={[
      { img: Icon, cardTitle: "Artixxan", cardText: "My first web project. I did this for fun for a friend. Take a look at my first steps.", href: "https://facebook.com/dan64" },
      { img: Icon, cardTitle: "Estudios Rosewood", cardText: "A webpage for a friend's media studio. This one is still on the works!", href: "https://facebook.com/dan64" },
      // { img: Icon, cardTitle: "waddup", cardText: "maboy", href: "https://facebook.com/dan64" },
    // { img: Icon, cardTitle: "waddup", cardText: "maboy", href: "https://facebook.com/dan64" },
    // // { img: Icon, cardTitle: "waddup", cardText: "maboy" },
  ]}
  />,
  document.querySelector("#portfolio .react-container")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
