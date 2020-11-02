import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/app.css';
import Icon from './images/this_is_me.jpg';
import ProjectCard from './js/ProjectCard';

console.log("rendering");

ReactDOM.render(
  <ProjectCard />,
  document.querySelector('#project-card')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
