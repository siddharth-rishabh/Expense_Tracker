let expenseName = document.querySelector("#expenseName")
let expenseAmount = document.querySelector("#amount")
let expenseCategory = document.querySelector("#category")
let btn = document.querySelector("#addExpense")
let table = document.querySelector("#table")
let total = document.querySelector("#totalExpense")
let totalEx =0;
let expensesList;

if (localStorage.getItem("Expenses")){
  expensesList= JSON.parse(localStorage.getItem("Expenses"));
}else{
  expensesList=[];
}
loadExpense();
function addExpense(){

if (!expenseName.value || !expenseAmount.value || !expenseCategory.value) {
        alert("Please fill in all fields!");
        return;
      }
    const newRow = table.insertRow();

     let nameCell = newRow.insertCell(0);
     let amountCell = newRow.insertCell(1);
     let categoryCell = newRow.insertCell(2);
     let dltCell = newRow.insertCell(3);

      let expense= {
        name: expenseName.value,
        amount: parseFloat(expenseAmount.value),
        category:expenseCategory.value,
      };
      let dltbtn = document.createElement("button");
      dltbtn.textContent="Remove";
      dltCell.appendChild(dltbtn);

      dltbtn.addEventListener("click", dltEx =()=> {
        let rowIndex= newRow.rowIndex;
        expensesList.splice(rowIndex,1);
        table.deleteRow(rowIndex);
      });

      expensesList.push(expense);

    localStorage.setItem("Expenses", JSON.stringify(expensesList));

     nameCell.textContent = expense.name;
     amountCell.textContent = "$"+ parseFloat(expense.amount);
     categoryCell.textContent = expense.category;
     
      totalEx += parseFloat(expenseAmount.value);
      total.textContent = totalEx;
     
     expenseName.value= "";
     expenseAmount.value= "";
     expenseCategory.value= "";

}

btn.addEventListener("click", addExpense);
document.addEventListener("keydown", function(event){
  if(event.key === "Enter"){
    addExpense();
  }
});

function loadExpense(){
  expensesList.forEach(expense => {
    const newRow = table.insertRow();
     let nameCell = newRow.insertCell(0);
     let amountCell = newRow.insertCell(1);
     let categoryCell = newRow.insertCell(2);
     let dltCell = newRow.insertCell(3);

     nameCell.textContent = expense.name;
     amountCell.textContent = "$"+ expense.amount;
     categoryCell.textContent = expense.category;
     let dltbtn = document.createElement("button");
      dltbtn.textContent="Remove";
      dltCell.appendChild(dltbtn);

      dltbtn.addEventListener("click", dltEx =()=> {
        let rowIndex= newRow.rowIndex;
        expensesList.splice(rowIndex,1);
        table.deleteRow(rowIndex);
      });
      totalEx += parseFloat(expense.amount);
      total.textContent = totalEx;

  });
}