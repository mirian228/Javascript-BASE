// There are three conditional statements in Java if, else if, Switch case
 let person_age=15;

 if(person_age>=18) {
    console.log("person eligible for Vote");
 } else {
    console.log("person not eligible for Vote");
 }

 console.log("Program exited......");

 // Even or Odd
 let num =10;
 //num=11;

 if(num%2==0) {
    console.log("number is even");
 } else {
    console.log("number is odd");
 }

 // Largest of 3 numbers
 let a=10, b=20, c=30;
if(a>b && a>c) {
    console.log("a is greatest number");
} else if(b>a && b>c) {
    console.log("b is greatest number");
} else if(c>a && c>b) {
    console.log("c is greatest number");
} else {
    console.log("Comparison error");
}

// Print Week Name with if else
let weekno=8;

if(weekno==1) {
    console.log("It's Monday")
}
 else if(weekno==2) {
    console.log("It's Tuesday")
}
 else if(weekno==3) {
    console.log("It's Wednesday")
}
 else if(weekno==4) {
    console.log("It's Thursday")
}
 else if(weekno==5) {
    console.log("It's Friday")
}
else if(weekno==6) {
   console.log("It's Saturday")
}
else if(weekno==7) {
   console.log("It's Sunday")
} else {
    console.log("Invalid week number")
}

// Print Week Name with switch 

switch(weekno) {
    case 1: console.log("Monday");
        break;
    case 2: console.log("Tuesday");
        break;
    case 3: console.log("Wednesday");
        break;
    case 4: console.log("Thursday");
        break;
    case 5: console.log("Friday");
        break;
    case 6: console.log("Saturday");
        break;
    case 7: console.log("Sunday");
        break;
    default: console.log("Invalid week Number")
} 
    