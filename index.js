//Print something in the console
// Go to inspect and find the text in the console
// console.log(`Hello`);
// console.log(`I Like pizza`);

//Alert pop up message
//window.alert(`This is an alert`);

// --> For Comments

//To display text in the screen
// document.getElementById("myH1").textContent = `Hello`;
// document.getElementById("myP").textContent = `How are you`;

//Variables in JS
//Declaration 
// let x;
// let y;

//Assign it to the value
// x = 10;
// console.log(x);

//To understand what type of variable it is 
// console.log(typeof x);
//Integer data type variable
// let age = 25;
// let price = 25.06;
//To print it in the console
// console.log(`The price is ${price}`);

//String data type variable
// let firstName = `Agila`;

//To print it in the console
// console.log(`The name is ${firstName}`);

//Boolean Data Type
// let flag = false;

//To print it in the screen
// document.getElementById("myP1").textContent = `My name is ${firstName} and my online status is ${!flag}`;
// document.getElementById("myP2").textContent = firstName;

//Accept data from the user
//Easy Way - Window Prompt
//Professional Way - Using HTML textBox

//Window Prompt
// let userage;

// userage = window.prompt(`What is your age?`);
// console.log(userage);
// If I need age in Number then, I need to convert its type by
// userage = Number(userage);

//HTML Text Box
// let username;
// document.getElementById("MySubmit").onclick = function(){
//     username = document.getElementById("textEntry").value;
//     console.log(username);
//     document.getElementById("myH1").textContent = `Hello ${username}`;
    
// }

//If I declare a variable as const, its further value cannot be changed.

//Question 1. Get the radius of the circle from the user and print the answer
const pi = 3.14;
let radius;
let circumference;
document.getElementById("mySubmit").onclick = function(){
    let radius = document.getElementById("myRadius").value;
    circumference = 2 * pi * radius;
    console.log(circumference);
    document.getElementById("myP").textContent = `The circumference is ${circumference} cm`;
}



