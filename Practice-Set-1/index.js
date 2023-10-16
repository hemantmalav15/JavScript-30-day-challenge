/**
 * Q1. Create a string and a number and add them.
 * Q2. Create a const Obj in js, can you change it to hold numbers later.
 * Q3. Try to add new key in const Obj
 * Q4. Write a program to create a word dictionary of 5 words.
 */

// Solution of Q1:
let a = "1";
let b = 2;
console.log(a + b, typeof (a + b)); // 12 string
console.log(b + a); // 21 string

// Solution of Q2:
let obj = {
    name: "hemant",
    age: 22
}

// Solution of Q3:
obj.gender = "male";
console.log(obj);

/* It is not possible that it hold any data type bcoz it is a constant but we can update values in this 
* object, like we can change name, age etc. but if it was declare with let it can be possible in that case.
* obj = 3;
*/
obj["friend"] = "chotu";
console.log(obj);

obj = { name: "hemant" }
console.log(obj);

const obj2 = {
    "one": 1,
    "two": 2,
    "three": 3
}
obj = obj2;
console.log(obj);