function $(elemId) {
	return document.getElementById(elemId);
}
function pipei(){
		
	 	var manNum=parseInt($(boy_num).value);//得到输入男生的人数
		var girlNum=parseInt($(girl_num).value);//得到输入女生的人数
		alert("ss1");
		var cishu=0;//标记循环的次数
		if(manNum<girlNum){
			cishu=manNum;
		}else if(manNum>girlNum){
			cishu=girlNum;
		}else{
			cishu=manNum;
			}
		
	 	var manSz=new Array("boy_1","boy_2","boy_3","boy_4","boy_5");
		var girlSz=new Array("girl_1","girl_2","girl_3","girl_4","girl_5");
		for(var i=0;i<cishu;i++){
			manMove(manSz[i]);
			womenMove(girlSz[i]);
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