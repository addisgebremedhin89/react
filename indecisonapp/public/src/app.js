console.log("App.js is running!");

// conditionally rendering is the core of software dev
// if statements
//ternary operators
// clogical and operator

var app = {
 title: "Indecision App",
 subtitle: "This is info",
};
  var template = (
<h2>
  <h1>{app.title}</h1>
  <p>{app.subtitle}</p>
  <ol>
    <li>Item one</li>
    <li>Item two</li>
  </ol>
</h2>
);

//cant pass two objects in this variable so we wrap it in a root object for example h2

//create a templateTwo var JSX expression
//root element which will be div
//insdie of the root will be an h1 tag --> Addis G
//paragraph tag with age: 28
//another p tag location: seattle
//render templateTwo instead of template


var userName = "Addis";
var age = 27;
var city = "LA";

function getLocation() {
  if (location) {
    return <p>Location: {location}</p>;
  } else {
  return "Undefined";
}

var user = {
  name: "Andrew",
  age: 26,
  location: "LA",
};
// ternary operaters are inline?
//the below declaration of var templateTwo is known as a JSX Expression
//using the logical and operator which is also precise
//we are only going to show age if they are over 18</h1>
//using the logical and operator which is also precise
//we are only going to show age if they are over 18
// getLocation is taking in an argument that will be passed in to determine if a location exists or not
var templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'} </h1>
    {user.name ? user.name : 'Anonymous' }
    <p>Age: {user.age}</p>
    <p>Location: {getLocation(user.Location)}</p>
    { getLocation(user.location) }
  </div>
);
//writing our html assigning to our variable and passing in it to our reactdom

//we used conditional rendering by two things, our jx expression to call our function and our if statement

//ternary operater is more precise - starts with a condition then a question and provide a value that it will resolve to if its true then we add a colon and provide a value to use if the condition does not pass
var appRoot = document.getElementById('app');

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
//ReactDOM.render(template, appRoot);
//this is our very own application, we are accessig the reactdom library and applying the method render that will take in two arguments
//reactdoms method we will be using is .render

l