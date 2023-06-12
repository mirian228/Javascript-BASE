let person = 
 {
    firstname:"John",
    lastname:"Kenedy",
    age:50,
    weight:60
 }

 person.height=170;

 // Accessing Object Properties
 console.log(person["firstname"]);
 console.log(person.firstname);
 console.log("Person height is: " + person.height);

 // Add new property the existing object
 person.height=190;
 console.log("Updated person height is: " + person.height);
 delete person.age;
 console.log(person.age);

 // for/in loop
 for(let x in person) {
    //console.log(x); // prints property names
    //console.log(person[x]); // prints property values
    console.log(x + ": " + person[x]); 
 }


