function extractDateParts(inputString){

    const datePattern = /(\d{1,2})\/(d{1,2})\/(\d{4})/;

    const match = inputString.match(datePattern);

    if (match) {
        const [,day, month, year] = match;

        return{
            day:parseInt(day,10),
            month:parseInt(month,10),
            year:parseInt(year,10)
        };
    } else {
        return null;
    }
}

const testDateString = "Today's date is 03/24/2024";
const extractedDate = extractDateParts(testDateString);

if (extractedDate) {
    console.log("Day :", extractedDate.day);
    console.log("Month : ",extractedDate.month);
    console.log("Year :", extractedDate.year);
} else {
    console.log("No valid date found in the input string");
}