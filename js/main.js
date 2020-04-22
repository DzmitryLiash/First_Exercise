let startBtn = document.getElementById('start'),

    budget = document.getElementsByClassName('budget-value')[0],
    daybudget = document.getElementsByClassName('daybudget-value')[0],
    level = document.getElementsByClassName('level-value')[0],
    expenses = document.getElementsByClassName('expenses-value')[0],
    optionalexpenses = document.getElementsByClassName('optionalexpenses-value')[0],
    income = document.getElementsByClassName('income-value')[0],
    monthsavings = document.getElementsByClassName('monthsavings-value')[0],
    yearsavings = document.getElementsByClassName('yearsavings-value')[0],

    expensesItems = document.getElementsByClassName('expenses-item'),

    expensesItemAgreedBtn1 = document.getElementsByTagName('button')[0],
    expensesItemAgreedBtn2 = document.getElementsByTagName('button')[1],
    countBudgetBtn = document.getElementsByTagName('button')[2],

    optionalexpensesItems = document.querySelectorAll('.optionalexpenses-item'),

    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');





let money, time;

function start() {
    money = +prompt("Your monthly budget?"); // Plus для того чтобы перевести тип в число
    time = prompt("Input date in format YYYY-MM-DD");

    while (isNaN(money) || money == '' || money == null) { //money==null для того чтобы пользователь 
        money = +prompt("Your monthly budget?"); //не нажал кнопку отмена
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expensis: {},
    optional: {},
    income: [],
    savings: true,

    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("How much money do you have to spend?", ''),
                b = prompt("How much will iy cost?", '');

            if ((typeof (a) === 'string') && (typeof (a)) != null &&
                (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
                console.log("done");
                appData.expensis[a] = b; //Когда пользователь ответит на вопрос "а" мы получим ответ "b" (ключ-значение)
            } else {
                console.log("Error");
                i = i - 1;
            }
        }
    },

    detectDayBudget: function () { // Расчет дневного бюджета
        appData.moneyPerDay = (appData.budget / 30).toFixed();

        alert("Every day budget: " + appData.moneyPerDay);
    },

    detectLevel: function () { // Расчет уровня достатка
        if (appData.moneyPerDay < 100) {
            console.log("Minimal level of money");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Middle level of money");
        } else if (appData.moneyPerDay > 2000) {
            console.log("You are rich!");
        } else {
            console.log("Error!");
        }
    },

    checkSavings: function () { // Функция для расчета дохода с нашего депозита
        if (appData.savings == true) {
            let save = +prompt("What is the amount of savings"),
                percent = +prompt("At what percentage?");

            appData.monthIncome = save / 100 / 12 * percent;
            alert("Income from your deposit?" + appData.monthIncome);
        }
    },

    chooseOptExpenses: function () { // Функция для определения необязательных расходов
        for (let i = 0; i < 3; i++) {
            let optExp = prompt("Optional expenses?");

            appData.optionalExpenses[i] = "1 : " + optExp;

            console.log(appData.optionalExpenses);
        }
    },

    chooseIncome: function () {
        let items = prompt("what will bring additional income? (Input wia ,)", '');
        while (!isNaN(items) || items == '' || items == null) {
            prompt("what will bring additional income? (Input wia ,)", '');
        }
        appData.income = items.split(", ");
        appData.income.push(prompt("Maybe something else?"));
        appData.income.sort();

        this.income.forEach(function (item, i) {
            alert("Ways of bringing additional incomes: " + (i++) + ". " + " - " + item);
        });
    },



};

for (let key in appData) {
    console.log("Our program is include: " + key + " => " + appData[key]);
}