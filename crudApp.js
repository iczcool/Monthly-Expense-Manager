var expense = [{expenseName: "Water", amount: 200, date: "13.02.2019"}, {expenseName: "Food", amount: 100, date: "01.02.2019"}, {expenseName: "Car", amount: 153, date: "23.02.2019"}];
function readFunc() {
	var el = document.getElementById("expenses");
	var data = '';
	for (var i = 0; i < expense.length; i++) {
		data += '<tr>';
		data += '<td>' + expense[i].expenseName + '&nbsp;</td>';
		data += '<td>' + expense[i].amount + '&nbsp;</td>';
		data += '<td>' + expense[i].date + '&nbsp;&nbsp;</td>';
		data += '<td><button onclick="editFunc(' + i + ')">Edit</button></td>';
		data += '<td><button onclick="deleteFunc(' + i + ')">Delete</button></td>';
		data += '</tr>';
	}
	el.innerHTML = data;
}
readFunc();

function createFunc() {
	var elName = document.getElementById("expense-name").value;
	var elAmount = document.getElementById("expense-amount").value;
	var elDate = document.getElementById("expense-date").value;
	var obj = {expenseName: elName, amount: elAmount, date: elDate};
	if (elName && elAmount && elDate) {
		expense.push(obj);
		document.getElementById("expense-name").value = '';
		document.getElementById("expense-amount").value = '';
		document.getElementById("expense-date").value = '';
		readFunc();
	}

}

function editFunc(item) {
	var el = document.getElementById("updateExpense");
	el.value = expense[item].expenseName;
	document.getElementById("update-button").style.display = "block";
	document.getElementById("editForm").onsubmit = function() {
        var cunt = el.value;
        expense[item].expenseName = cunt;
        readFunc();
      }
}
// createFunc();

function deleteFunc(item) {
	// Delete the current row
      expense.splice(item, 1);
      // Display the new list
      calculateExpense();
      readFunc();
      
}

function calculateExpense() {
	var income = document.getElementById("income-name").value;
	var totalExpense = 0;
	for (var i = 0; i < expense.length; i++) {
		// if (expense[i].date <= Date.now()) {
		// 	alert("A bill is due now!")
		// }
		// else{
			totalExpense += expense[i].amount;
		 	document.getElementById("tot-expense").innerHTML = "Total Expense is: " + totalExpense;
		 	document.getElementById("income").innerHTML = "Your income is: " + income;
		 	document.getElementById("balance").innerHTML = "Your balance is: " + (income - totalExpense);
		// }
		
		
	}
}
calculateExpense();




//print array contents
function mytest(){
	document.getElementById("myarray").innerHTML = JSON.stringify(expense, null, 9);
	//document.getElementById("myarray").innerHTML = expense.length;
}

