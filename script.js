let expenseName = document.querySelector("#expenseName")
let expenseAmount = document.querySelector("#amount")
let expenseCategory = document.querySelector("#category")
let btn = document.querySelector("#addExpense")
let table = document.querySelector("#table")
let total = document.querySelector("#totalExpense")
let totalEx =0
function addExpense(){

if (!expenseName.value || !expenseAmount.value || !expenseCategory.value) {
        alert("Please fill in all fields!");
        return;
      }
    const newRow = table.insertRow();

     let nameCell = newRow.insertCell(0);
     let amountCell = newRow.insertCell(1);
     let categoryCell = newRow.insertCell(2);

     let expenses = localStorage.setItem("Name", expenseName.value);
           expenses = localStorage.setItem("Amount", expenseAmount.value);
           expenses = localStorage.setItem("Category", expenseCategory.value);

     nameCell.textContent = expenseName.value;
     amountCell.textContent = "$"+ parseFloat(expenseAmount.value);
     categoryCell.textContent = expenseCategory.value;
     
     totalEx +=parseFloat(expenseAmount.value);
     total.textContent=  totalEx;
     
     expenseName.value= "";
     expenseAmount.value= "";
     expenseCategory.value= "";

}

btn.addEventListener("click", addExpense)
document.addEventListener("keydown", function(event){
  if(event.key === "Enter"){
    addExpense();
  }
});

