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
		str += "<span class=\"" + gender + "\" id=\"" + gender + "_" + i + "\">" + i + "</span>"
	}
	obj.innerHTML += str;
}