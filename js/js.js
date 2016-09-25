function $(elemId) {
	return document.getElementById(elemId);
}

function generationPeople(gender, v) {
	if (isNaN(v)) {
		alert("Error caused by number of " + gender);
		return;
	}
	var obj = $(gender + "_area");
	var str = ""
	for (var i = 1; i <= v; i++) {
		str += "<div class=\"" + gender + "\" id=\"" + gender + "_" + i + "\">" + i + "</div>"
	}
	obj.innerHTML += str;
}

function startToMatch() {
	moveTo("boy_1", 300);
	moveTo("girl_1", -300);
	setTimeout(cancelDisplay("boy_1"), 3000);
	//setTimeout(cancelDisplay("girl_1"), 3000);
}

function cancelDisplay(elemId) {
	$(elemId).remove();
}

function moveTo(elemId, toX) {
	//$(elemId).style.marginLeft = toX + "px";
	//$(elemId).style.display = "none";
	$(elemId).setAttribute("class", toX > 0 ? "cancel_boy" : "cancel_girl");

}