console.log("App.js is running!");

// JSX - Javascript XML this is a language extension like SASS


var template = React.createElement(
  'p',
  null,
  'This is JSX from app.js'
);
//var template =
//chrome doesnt know this jsx format so we will use the compilier bable to compile down to basic js using babeljs.io <p>This is JSX from app.js</p>;
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
//this is our very own application, we are accessig the reactdom library and applying the method render that will take in two arguments
//reactdoms method we will be using is .render

