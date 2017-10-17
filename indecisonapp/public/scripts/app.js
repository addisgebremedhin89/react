
"use strict";

console.log("App.js is running!");

var template = React.createElement(
  "h1",
  null,
  "Indecision App"
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
//this is our very own application, we are accessig the reactdom library and applying the method render that will take in two arguments
//reactdoms method we will be using is .render