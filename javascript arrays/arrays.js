// Declaration with brackets
let cars = ["BMW", "MERCEDES", "AUDI"];

for(let i=0; i<cars.length; i++) {
    console.log(cars[i]);
}
// Declaration with new
let people = new Array("Scott", "John", "Lawrence");
console.log(people[0]);

// Arrays can contain different type of data
let myarray=[100, "welcome", 10.15, true];
console.log(myarray);

// We can save objects inside array
let person1 = 
{
    name:"Scott",
    surname:"Englishman"
};

let car1 = 
{
    make:"Volvo",
    model:"XC-90"
};

let objectArray = [person1, car1];
console.log(objectArray);

// Looping elements from array using for of loop
for(object of objectArray) {
    console.log(object);
}

// Determine type of object
console.log(typeof(objectArray));