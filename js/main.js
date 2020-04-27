let startBtn = document.getElementById('start'),

    budgetValue = document.getElementsByClassName('budget-value')[0],
    daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0],

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

expensesItemAgreedBtn1.disabled = true;
expensesItemAgreedBtn2.disabled = true;
countBudgetBtn.disabled = true;

startBtn.addEventListener('click', function () {
    time = prompt("Input date in format YYYY-MM-DD");
    money = +prompt("Your monthly budget?"); // Plus для того чтобы перевести тип в число

    while (isNaN(money) || money == '' || money == null) { //money==null для того чтобы пользователь 
        money = +prompt("Your monthly budget?", ""); //не нажал кнопку отмена
    }

    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed(); // textContent - записывает значение money
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDay();

    expensesItemAgreedBtn1.disabled = false;
    expensesItemAgreedBtn2.disabled = false;
    countBudgetBtn.disabled = false;
});

expensesItemAgreedBtn1.addEventListener('click', function () {
    let sum = 0;
    expensesValue.innerHTML = "1";
    for (let i = 0; i < expensesItems.length; i++) {
        let a = expensesItems[i].value,
            b = expensesItems[++i].value;

        if ((typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
            appData.expenses[a] = b; //Когда пользователь ответит на вопрос "а" мы получим ответ "b" (ключ-значение)
            sum += +b;
        } else {
            i = i - 1;
        }
        expensesValue.textContent = sum;
    }

});

expensesItemAgreedBtn2.addEventListener('click', function () {
    for (let i = 0; i < optionalexpensesItems.length; i++) {
        let optExp = optionalexpensesItems[i].value;

        appData.optionalExpenses[i] = optExp;

        optionalexpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

countBudgetBtn.addEventListener('click', function () {
    if (appData.budget != undefined) {

        appData.moneyPerDay = ((appData.budget - +expensesValue.textContent) / 30).toFixed();

        daybudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Minimal level of money";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Middle level of money";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "You are rich!";
        } else {
            levelValue.textContent = "Mistake!";
        }
    } else {
        daybudgetValue.textContent = "Mistake!";
    }
});

incomeItem.addEventListener('input', function () {
    let items = incomeItem.value;

    if (isNaN(items) || items != '') {
        appData.income = items.split(',');
        incomeValue.textContent = appData.income;
    }
});

checkSavings.addEventListener('click', function () {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};