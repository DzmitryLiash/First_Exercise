"use strict";

let money = prompt("Your monthly budget?"),
    time = prompt("Input date in format YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expensis: {},
    optional: {},
    income: [],
    savings: false
};

let firstq1 = prompt("How much money do you have to spend?", ""),
    secondq1 = prompt("How much money do you have to spend?"),
    firstq2 = prompt("How much will it cost?"),
    secondq2 = prompt("How much will it cost?");

appData.expensis[firstq1] = firstq2;
appData.expensis[secondq1] = secondq2;

alert(appData.budget / 30);