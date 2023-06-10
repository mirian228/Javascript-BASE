document.getElementById("demo1").innerHTML="This is dynamic message"
document.getElementById("demo2").innerHTML="Hello Javascript!"
document.getElementById("myButton").onclick = displayDate
 
 function displayDate() {
	document.getElementById("myDate").innerHTML=Date();
 }

