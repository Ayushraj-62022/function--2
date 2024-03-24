function findCharacterMatches(inputString) {
    const digitPattern = /\d/g; // Matches any digit
    const uppercasePattern = /[A-Z]/g; // Matches any uppercase letter
    const lowercasePattern = /[a-z]/g; // Matches any lowercase letter
    const specialCharPattern = /[^a-zA-Z0-9]/g; // Matches any special character (non-alphanumeric)

    const digitMatches = inputString.match(digitPattern);
    const uppercaseMatches = inputString.match(uppercasePattern);
    const lowercaseMatches = inputString.match(lowercasePattern);
    const specialCharMatches = inputString.match(specialCharPattern);

    return {
        digits: digitMatches,
        uppercaseLetters: uppercaseMatches,
        lowercaseLetters: lowercaseMatches,
        specialCharacters: specialCharMatches,
    };
}

// Example usage:
const testString = "Hello, World! 123 @#$";
const matches = findCharacterMatches(testString);

console.log("Digits:", matches.digits);
console.log("Uppercase letters:", matches.uppercaseLetters);
console.log("Lowercase letters:", matches.lowercaseLetters);
console.log("Special characters:", matches.specialCharacters);
