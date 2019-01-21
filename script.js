var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function removeParent(event){

   event.target.parentNode.remove();

}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	addDeleteButton(li);	

}

function addDeleteButton(listItem){

	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete"));
    listItem.appendChild(btn);

	btn.addEventListener("click", removeParent);

	btn.classList.add("btnSpacing")

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

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

function toggleItem(event){

   event.target.classList.toggle("done");

}

var listItems = document.querySelectorAll("li");

for (var i = 0; i < listItems.length; i++) {

	  listItems[i].addEventListener("click", toggleItem);

	  addDeleteButton(listItems[i]);

}
