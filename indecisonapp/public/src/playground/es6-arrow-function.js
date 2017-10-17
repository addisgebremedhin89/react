const square = function (x) {
  return x * x;
};

console.log(square(8));

//above is an es5 function
//below is an es6 version of the function above
// es6 functions are anonymous unlock es5 where we can name teh function
// if you want to reference the es6 function later assign to a variable like const

/*const squareArrow = (x) => {
  return x * x;
};*/


// now recreating the above using arrow expression syntax


const squareArrow =  (x) => x * x;
//this expression is more concise and implicity states return
console.log(squareArrow(9));

//Challenge use arrow functions

const fullName = 'Tehut Addis';
let firstName;

const getFirstName = (fullname) => {
  firstName = fullName.split(' ')[0];
  return firstName;
}

console.log(getFirstName(fullName));
