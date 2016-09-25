function $(elemId) {
	return document.getElementById(elemId);
}
function pipei(){
		var manJihe=document.getElementsByClassName("boy")[0];
		var girlJihe=document.getElementsByClassName("girl")[0];
		var manArray=new Array(manJihe.length);
		var womenArray=new Array(girlJihe.length);
		var cishu=0;
		for(var i=0;i<manJihe.length;i++){
			manArray[i]=manJihe[i];
		}
		for(var i=0;i<girlJihe.length;i++){
			womenArray[i]=girlJihe[i];
		}
		if(manJihe.length<=girlJihe.length){
			cishu=manJihe.length;
		}else{
			cishu=girlJihe.length;
			}
				
		for(var i=0;i<cishu;i++){
			manArray[i].display="none";
			womenArray.splice(i,1);
		}
 }
 function manMove(sex1){
	 	var fangxiang=document.getElementById(sex1);
		fangxiang.style.left=fangxiang.offsetLeft+10+"px";
	 }
function womenMove(sex1){
	 	var fangxiang=document.getElementById(sex1);
		fangxiang.style.left=fangxiang.offsetLeft-10+"px";
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
