"use strict";

let money = +prompt("Your monthly budget?"), // Plus для того чтобы перевести тип в число
    time = prompt("Input date in format YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expensis: {},
    optional: {},
    income: [],
    savings: false
};

//appData.expensis[firstq1] = firstq2;
//appData.expensis[secondq1] = secondq2;

for (let i = 0; i < 2; i++) {
    let a = prompt("How much money do you have to spend?", ''),
        b = prompt("How much money do you have to spend?", '');

    if ((typeof (a) === 'string') && (typeof (a)) != null &&
        (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expensis[a] = b; //Когда пользователь ответит на вопрос "а" мы получим ответ "b" (ключ - значение)
    } else {
        console.log("Error");
        i = 0;
    }
}

appData.moneyPerDay = appData.budget / 30;

alert("Every day budget: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Minimal level of money");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Middle level of money");
} else if (appData.moneyPerDay > 2000) {
    console.log("You are rich!");
} else {
    console.log("Error!");
}

// Используем цикл WHILE

// let i = 0;
// while (i < 2) {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");

//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log ("done");

//         appData.expenses[a] = b;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// }



// Используем цикл DO...WHILE

// let i = 0;
// do {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");

//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log ("done");

//         appData.expenses[a] = b;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// }
// while(i < 2);