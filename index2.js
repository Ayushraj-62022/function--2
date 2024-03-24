function checkMatch(pattern, inputString){
    const regex = new RegExp(pattern);
    return regex.test(inputString);
}
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneNumberPattern = /^\d{10}$/;

const testEmail =" ayushraj@gmail.com";
const testPhoneNumber = "1234567890";
console.log("Email Match :", checkMatch(emailPattern, testEmail ));

console.log("PhoneNumber Match :" ,checkMatch(phoneNumberPattern,testPhoneNumber));
