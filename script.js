var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");
var deleteBtn = document.getElementsByClassName("delete");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var delBtn = document.createElement("button");
	delBtn.appendChild(document.createTextNode("Delete"));
	delBtn.classList.add("delete");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	li.appendChild(delBtn);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function doneTask(task) {
	if (task.target.tagName === "LI"){
		task.target.classList.toggle("done");
	}
}

function deleteListElement(element) {
	if (element.target.className === "delete"){
		element.target.parentElement.remove();
	}
}

function handleUlClick(element) {
	doneTask(element);
	deleteListElement(element);
}

button.addEventListener("click", addListAfterClick);
ul.addEventListener("click", handleUlClick);
input.addEventListener("keypress", addListAfterKeypress);