"use strict";


// identify and assign the host
var hoursWorked = 45;
var basePayRate = 17.30;


//calculate values
var standardPayRate = basePayRate * 1;
var overtimePayRate = basePayRate* 1.5;


// Initialize the output.
var grossPay;


// compute the output.

// is this just the standard pay?
if (hoursWorked <=40){
    grossPay = hoursWorked = basePayRate
}


// does this require overtime pay?

if (hoursWorked > 40){
    var overtimeHours = hoursWorked - 40;
    var standardPay = standardPayRate * 40;
    var overtimePay = overtimePayRate * overtimeHours;
    grossPay = standardPay + overtimePay;
}

console.log("The hours worked is " + hoursWorked)
console.log("The base pay rate is " + basePayRate)
console.log("The gross pay is " + grossPay)