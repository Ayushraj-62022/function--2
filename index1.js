function outerFunction(parameter) {
    // Declare a variable within outerFunction
    const outerVariable = "I am from outerFunction!";

    // Define the inner function
    function innerFunction() {
        // Access the parameter of outerFunction
        console.log("Parameter from outerFunction:", parameter);

        // Access the variable declared within outerFunction
        console.log("Outer variable:", outerVariable);
    }

    // Return the inner function
    return innerFunction;
}

// Create an instance of the inner function
const myInnerFunction = outerFunction("Hello, Lexical Scoping!");

// Invoke the inner function
myInnerFunction();
