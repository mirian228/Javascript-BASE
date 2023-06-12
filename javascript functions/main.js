document.getElementById("add").onclick=addingTwoNumbers;
document.getElementById("substract").onclick=substractingTwoNumbers;
document.getElementById("multiply").onclick=multiplyTwoNumbers;
document.getElementById("divide").onclick=divideTwoNumbers;



function addingTwoNumbers() {
    let a = document.getElementById("Value2").value;
    let b = document.getElementById("Value3").value;
    let result = parseInt(a)+parseInt(b);
    document.getElementById("res").innerHTML=result;
}

 function substractingTwoNumbers() {
     let a = document.getElementById("Value2").value;
     let b = document.getElementById("Value3").value;
     let result = parseInt(a)-parseInt(b);
     document.getElementById("res").innerHTML=result;
 }
 function multiplyTwoNumbers() {
     let a = document.getElementById("Value2").value;
     let b = document.getElementById("Value3").value;
     let result = parseInt(a)*parseInt(b);
     document.getElementById("res").innerHTML=result;
 }
 function divideTwoNumbers() {
     let a = document.getElementById("Value2").value;
     let b = document.getElementById("Value3").value;
     let result = parseInt(a)/parseInt(b);
     document.getElementById("res").innerHTML=result;
 }



/* function add(a, b) {
    console.log(a+b);
}

add(5, 10);

// Function return value

function addition(a,b) {
    return a+b;
}

let res = addition(10, 100);
console.log(res);

// No arguments function
function greetings() {
    console.log("good morning");
}

greetings();
 */


