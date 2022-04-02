// jshint:esversion 6

// Shortened code.
module.exports.getDate = function () {
    const today = new Date();

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    }

    const date = today.toLocaleDateString("en-US", options);
    return date; 
    
}

// no parentheses bcoz don't want to activate function yet.

// module.exports.getDay = getDay; 

// function getDay() {
//     const today = new Date();

//     const options = {
//         weekday: "long",
//     }

//     const day = today.toLocaleDateString("en-US", options);
//     return day; 
// }

