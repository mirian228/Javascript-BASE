let fruits = ["Banana", "Orange", "Apple", "Mango"];
// Converts everything inside array to String and seperates by comma
console.log(fruits.toString()); // Banana,Orange,Apple,Mango
// When we use join() we can specify how we want to seperate values
console.log(fruits.join("*"));  // Banana*Orange*Apple*Mango

// pop() removes last element of array
fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.pop());
console.log(fruits);

// push() adds new element to array at the end
fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Avocado");
console.log(fruits);

//shift() removes first array element and shift all other elements to lower index
fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();
console.log(fruits);

//unshift() adds element to first place and moves others one step ahead 
fruits=["Orange", "Apple", "Mongo"];
console.log(fruits.unshift("Lemon"));
console.log(fruits);

//deleting elements from array
fruits=["Orange", "Apple", "Mongo"];
delete fruits[1];
console.log(fruits);

// concat() - joining/merging 2 or more arrays
let arr1=[10,20];
let arr2=[30,40];
let arr3 = arr1.concat(arr2);
console.log(arr3);

// Slice() - returns new array with rest of elements from the location provided. if we pass for example index 2 it will return every element after 2
fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits.slice(1));

// Sort() sorts elements by alphabet in case of Strings. sorts elements by ascending order if numbers.

fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits.sort());

// reverse() reverses an array Changes existing array in comparison with other methods.
fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits.reverse());