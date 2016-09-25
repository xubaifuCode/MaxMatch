function $(elemId) {
	return document.getElementById(elemId);
}

function startToMatch() {
	$("to_match").value = "NEXT";
	var boys = document.getElementsByClassName("boy");
	var girls = document.getElementsByClassName("girl");

	var len;

	if (boys.length < girls.length) {
		len = boys.length;
		$("boy_num").value = 0;
		$("girl_num").value = girls.length - len;
	} else {
		len = girls.length;
		$("boy_num").value = boys.length - len;
		$("girl_num").value = 0;
	}

	for (var i = 0; i < len; i++) {
		setTimeout("cancelDisplay(\"" + boys[i].id + "\", \"" + girls[i].id + "\")", 500);
	}
}

function cancelDisplay(boyId, girlId) {
	$(boyId).setAttribute("class", "cancel_boy");
	$(girlId).setAttribute("class", "cancel_girl");
	setTimeout("removeElem(\"" + boyId + "\", \"" + girlId + "\")", 3000);
}

function removeElem(boyId, girlId) {
	$(boyId).remove();
	$(girlId).remove();
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