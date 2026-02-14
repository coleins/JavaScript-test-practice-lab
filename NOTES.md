1. Define a function using a function declaration
   A function declaration is when you define a function using the function keyword with a name.
   Example:
   function greet() {
   return "Hello!";
   }

✅ You can call it before or after it is defined (because of hoisting).

2. Define hoisting
   Hoisting is JavaScript’s behavior of moving function declarations and variable declarations to the top of their scope during compilation.
   ⚠️ Important:

Function declarations are fully hoisted

var is hoisted but initialized as undefined

let and const are hoisted but not accessible before declaration

Example:
sayHi();

function sayHi() {
console.log("Hi");
}

This works because of hoisting.

3. Define a function expression
   A function expression is when a function is stored in a variable.
   Example:
   const greet = function () {
   return "Hello!";
   };

🚫 Function expressions are not hoisted like declarations.

4. Define an anonymous function
   An anonymous function is a function without a name.
   Example:
   setTimeout(function () {
   console.log("Hello");
   }, 1000);

The function has no name — it’s anonymous.

5. Define a function using a function expression
   This is the same idea as #3, but clearly stated:
   You define a function by assigning it to a variable.
   Example:
   const add = function (a, b) {
   return a + b;
   };

✔️ The function is created when the variable is assigned.

6. Define an IIFE (Immediately-Invoked Function Expression)
   An IIFE is a function that runs immediately after it is defined.
   Example:
   (function () {
   console.log("I run immediately!");
   })();

🔒 Commonly used to avoid polluting the global scope.

7. Define function-level scope
   Function-level scope means that variables declared inside a function are only accessible inside that function.
   Example:
   function test() {
   let secret = "hidden";
   console.log(secret);
   }

console.log(secret); // ❌ ReferenceError

📌 Note: var is function-scoped, while let and const are block-scoped.

8. Define scope chain
   The scope chain is the process JavaScript uses to look for variables.
   It searches:

Current scope

Parent scope

Global scope

Example:
const a = 1;

function outer() {
const b = 2;

function inner() {
console.log(a, b);
}

inner();
}

✔️ inner() can access both b and a via the scope chain.

9. Define closure
   A closure is when a function remembers and can access variables from its outer scope even after the outer function has finished running.
   Example:
   function counter() {
   let count = 0;

return function () {
count++;
return count;
};
}

const increment = counter();

increment(); // 1
increment(); // 2

🔐 count is preserved — that’s a closure.

🧠 One-Line Memory Cheatsheet
ConceptOne-line definitionFunction declarationNamed function using function keywordHoistingJS moves declarations to the topFunction expressionFunction stored in a variableAnonymous functionFunction without a nameIIFEFunction that runs immediatelyFunction-level scopeVariables exist only inside functionsScope chainJS looks up variables through parent scopesClosureFunction remembers outer variables
