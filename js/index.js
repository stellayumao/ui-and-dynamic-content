//References to active elements
const userInput = document.getElementById("user-input");
const btn = document.getElementById("trigger-click");
const displayData = document.getElementById("display-data");
const err = document.querySelector(".error");
const reset = document.querySelector("#shopping-list input");

function addItem() {
	//Default value of error paragraph
	err.textContent = null;
	//Removing Whitespace
	userInput.value = userInput.value.trim()
	//If user input is not empty
	if (userInput.value !== "") {
		//Create a list item
		let listItem = document.createElement("li");
		//assign the value to the list item
		listItem.textContent = "> " + userInput.value;
		//append the new element to DOM
		displayData.appendChild(listItem);
		reset.value = "";
	} else {
		err.textContent = "Nothing entered!";
	}
}

//Register button for
btn.addEventListener("click",addItem);