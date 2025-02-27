document.addEventListener("DOMContentLoaded", () => {

const expenseForm = document.getElementById("expense-form")
const expenseAmountInput = document.getElementById("expense-amount")
const expenseList = document.getElementById("expense-list")
const totalAmountDisplay = document.getElementById("total-amount")
const expenseNameInput = document.getElementById("expense-name")

let expense = JSON.parse(localStorage.getItem("expense")
) || [];
let totalAmount = calculateTotal();

renderExpenses();

expenseForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = expenseNameInput.ariaValueMax.trim();

    if (name !== "" && !isNaN(amount) && amount > 0 ) {
        const newExpense = {
            id:Date.now(),
            name: name,
            amount: amount,
        };
        expense.push(newExpense)
        saveExpensesTolocal();
        renderExpenses();
        updateTotal();

        expenseNameInput.value = "";
        expenseAmountInput.value = "";
    }
});

    function renderExpenses() {
        expenseList.innerHTML = "";
        expense.forEach((expense) => {
            const li = document.createElement("li");
            li.innerHTML = `
            ${expense.name} - $${expense.amount}
            <button data-id = "${expense.id}">Delete</button>
            `;
            expenseList.appendChild(li)
        });
    
    }

    
    
    function calculateTotal() {
    
    }
    
    function saveExpensesTolocal() {
    
    }
    
    function updateTotal() {
    
    }







})