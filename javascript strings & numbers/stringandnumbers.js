let s="welcome";

// charAt() retrieve character from string based on index;
console.log(s.charAt(1));


// concat(), adds string

let a = s.concat(" my friend");
console.log(a);

// replace() replace specifi string 
let b = "welcome to javascript"
console.log(b.replace("javascript", "java"));

// substring() extract portion from string
s = "welcome";
console.log(s.substring(0, 3));

// toLowerCase() & toUpperCase
s="WELcome";
console.log(s.toLowerCase());
console.log(s.toUpperCase());

// split() splits strings by what we provide
s="welcome to javascript";
let arr=s.split(' ');
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

// trim() trims whitespaces

s="          welcome    ";
console.log(s.trim());

// numbers
let x=100; // Integer value
let z= new Number(500);
let y=102.7 // decimal
let v= 10e2 // 10 square.
console.log(x,y,z);
//isInteger() checks for integer
x=10;
y=1.8;
z="x";
console.log(Number.isInteger(x));
console.log(Number.isInteger(y));
console.log(Number.isInteger(z));

// parseInt() converts string to number
z="2222";
console.log(parseInt(z));

// parseFloat() converts string to float
s="233.003"
console.log(parseFloat(s));

// toString() converts number to String
s=200;
console.log(s.toString());
console.log(typeof(s.toString()));