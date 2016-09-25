function $(elemId) {
	return document.getElementById(elemId);
}

function startToMatch() {
	cancelDisplay("boy_1", "girl_1");
}

function cancelDisplay(boyId, girlId) {
	moveTo(boyId, 300);
	moveTo(girlId, -300);
	setTimeout("removeElem(\"" + boyId + "\", \"" + girlId + "\")", 3000)
}

function removeElem(boyId, girlId) {
	$(boyId).style.display = "none";
	$(girlId).style.display = "none";
}

function moveTo(elemId, toX) {
	$(elemId).setAttribute("class", toX > 0 ? "cancel_boy" : "cancel_girl");

}

function generationPeople(gender, v) {
	if (isNaN(v)) {
		alert("Error caused by number of " + gender);
		return;
	}
	var obj = $(gender + "_area");
	var startIndex = document.getElementsByClassName(gender).length + 1;
	var str = ""
	for (var i = startIndex; i < startIndex + parseInt(v) ; i++) {
		str += "<div class=\"" + gender + "\" id=\"" + gender + "_" + i + "\">" + i + "</div>"
	}
	obj.innerHTML += str;
}