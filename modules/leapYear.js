const leapYear = function(x){
    if (x % 400 === 0) {
        return true;
    } else if (x % 100 === 0) {
        return false;
    } else if (x % 4 === 0) {
        return true;
    } else {
        return x;
    }
}

module.exports = leapYear;

// Write a function that takes in a year and returns a boolean indicating if the year is a leap year. 
// Years that are divisible by 4 are leap years, but years that are divisible by 100 are not leap years, 
// but years that are divisible by 400 are leap years.