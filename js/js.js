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
	v = parseInt(v);
	var objs = document.getElementsByClassName(gender);
	var startIndex = objs.length >= 1 ? parseInt(objs[objs.length - 1].innerHTML) : 0;
	var str = ""
	for (var i = startIndex + 1; i <= startIndex + v; i++) {
		str += "<div class=\"" + gender + "\" id=\"" + gender + "_" + i + "\">" + i + "</div>"
	}
	$(gender + "_area").innerHTML += str;
}