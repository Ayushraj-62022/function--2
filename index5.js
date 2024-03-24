function getEstimatedDeliveryTime(packageType) {
    switch (packageType.toLowerCase()) {
        case "standard":
            return "Estimated delivery time: 3-5 days";
        case "express":
            return "Estimated delivery time: 1-2 days";
        case "overnight":
            return "Delivered next day";
        default:
            return "Invalid package type. Please choose 'standard', 'express', or 'overnight'.";
    }
}

// Example usage:
const packageType1 = "standard";
const packageType2 = "express";
const packageType3 = "overnight";
const invalidPackageType = "superfast";

console.log(getEstimatedDeliveryTime(packageType1));
console.log(getEstimatedDeliveryTime(packageType2));
console.log(getEstimatedDeliveryTime(packageType3));
console.log(getEstimatedDeliveryTime(invalidPackageType));
