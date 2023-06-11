let x=10, y=20;

// Arithmetic operators + - / % * **
console.log(x+y); // 30
console.log(x-y); // -10
console.log(x/y); // 0.5
console.log(x%y); // 10
console.log(x*y); // 200
console.log(5**2); // 25

// Increment/Decrement operators ++ --
console.log(++x);
console.log(--y);

// Assignment operators = += -= *= /= %=
x=100; // Simple assignment operator
y=50;
console.log(x);
x=x+y; // x+=y same
console.log(x); // 150

//Relational/comparison operators  < > <= >= !=
//Always return a boolean value true/false
x=10;
y=20;
console.log(x>y); //false
console.log(x<y); //true
console.log(x>=y); // false
console.log(x!=y); // true
console.log(x==y); //false

//ternary operator
console.log(x>y?x:y); // if true returns x if false returns y
