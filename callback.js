//function declaration
function welcomeMessage() {
  return "Hello World";
}
console.log(welcomeMessage());

// function expression

const welcomeMsg = function () {
  return "Hello World";
};
console.log(welcomeMsg());

// Arrow function

const welMsg = () => "Hello World!";
console.log(welMsg());

//callback function

function welcomeMess(msg) {
  return msg();
}
console.log(
  welcomeMess(function () {
    return `Hurray! You're back`;
  }),
);
