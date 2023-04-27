"use strict";

// Current hour
var time = 10;

// Greeting
var greeting;
if (time < 10) {
    greeting = "Good morning, mate!";
} else if (time < 17) {
    greeting = "Good day, bruv!";
} else if (time < 23) {
    greeting = "Good evening, mate!";

}

console.log(greeting);
