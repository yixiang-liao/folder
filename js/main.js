// JavaScript Document
var add1= document.getElementById("add1")
var minus1= document.getElementById("minus1")
var inputnum1= document.getElementById("inputnum1")

add1.onclick= function(){
	inputnum1.value=parseInt(inputnum1.value)+1
}
minus1.onclick= function(){
	if(inputnum1.value<=0){
		inputnum1.value=0
	}
	else
		inputnum1.value=parseInt(inputnum1.value)-1
}

var add2= document.getElementById("add2")
var minus2= document.getElementById("minus2")
var inputnum2= document.getElementById("inputnum2")

add2.onclick= function(){
	inputnum2.value=parseInt(inputnum2.value)+1
}
minus2.onclick= function(){
	if(inputnum2.value<=0){
		inputnum2.value=0
	}
	else
		inputnum2.value=parseInt(inputnum2.value)-1
}

var add3= document.getElementById("add3")
var minus3= document.getElementById("minus3")
var inputnum3= document.getElementById("inputnum3")

add3.onclick= function(){
	inputnum3.value=parseInt(inputnum3.value)+1
}
minus3.onclick= function(){
	if(inputnum3.value<=0){
		inputnum3.value=0
	}
	else
		inputnum3.value=parseInt(inputnum3.value)-1
}

var add4= document.getElementById("add4")
var minus4= document.getElementById("minus4")
var inputnum4= document.getElementById("inputnum4")

add4.onclick= function(){
	inputnum4.value=parseInt(inputnum4.value)+1
}
minus4.onclick= function(){
	if(inputnum4.value<=0){
		inputnum4.value=0
	}
	else
		inputnum4.value=parseInt(inputnum4.value)-1
}

var i;
function total(){
	var totalprice=0;
	for(i=1;i<=4;i++){
		var inputnum=document.getElementById("inputnum"+i).value;
		var prcie=document.getElementById("prcie"+i).value;
		var subtotal=inputnum*prcie;
		totalprice+=subtotal;
		document.getElementById("amount"+i).innerHTML=inputnum+"個";
		document.getElementById("subtotal"+i).innerHTML=subtotal+"元";
	}
		document.getElementById("total").innerHTML=totalprice+"元";	
	alert('已加入購物車')
}



