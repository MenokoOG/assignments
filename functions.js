// closure-ability to return functions from functions.closures in JavaScript allow inner functions to access variables from their outer scope, even after the outer function has finished executing. This powerful feature enables a wide range of programming patterns and techniques
/*
1. Definition: A closure is the combination of a function bundled together with references to its surrounding state (the lexical environment) where it was declared. In simpler terms, a closure allows a function to remember and access its lexical scope even when that function is executing outside its lexical scope.
2. In the Example:
We have an outer function named outerFunction which contains a variable outerVar and an inner function innerFunction.
innerFunction has access to outerVar, even though it's declared outside of its scope.
3. Execution:
When outerFunction is called, it creates a new lexical environment.
Inside this environment, outerVar is defined and innerFunction is also declared.
innerFunction is then returned from outerFunction.
Even after outerFunction completes execution and its execution context is gone, innerFunction maintains access to outerVar. This is possible due to closure.
4. Closure in Action:
When innerFunc is invoked, it prints the value of outerVar even though outerVar is not in the scope of innerFunction. This is because innerFunction retains a reference to its enclosing scope, which includes outerVar.
5. Memory Management:
Closures are crucial for memory management in JavaScript. They allow inner functions to retain access to variables in their outer scopes even after those outer scopes have finished execution. This can be useful for tasks like data encapsulation and maintaining state in functional programming
*/

function addX(x) {
    return function addYtoX(y) {
        return x + y
    }
}

const add5 = addX(5)

console.log(add5(10))
console.log(add5(20))
console.log(add5(5))
console.log(add5(0))
console.log(add5(-10))
console.log(add5(100))
console.log("************************************")
function outerFunction(extraText) {
    let outerVar = 'I am outer!';
  
    function innerFunction1() {
      return 'This is the beginning. ';
    }
  
    function innerFunction2() {
      return 'This is the middle. ';
    }
  
    function innerFunction3() {
      return 'This is the end. ';
    }
  
    return function() {
      return innerFunction1() + innerFunction2() + innerFunction3() + outerVar + ' ' + extraText;
    };
  }
  
  let combinedSentence = outerFunction('Extra text added!');
  console.log(combinedSentence()); // Output: This is the beginning. This is the middle. This is the end. I am outer! Extra text added!
  
  
  
  