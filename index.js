Print something in the console
Go to inspect and find the text in the console
console.log(`Hello`);
console.log(`I Like pizza`);

//Alert pop up message
window.alert(`This is an alert`);

//--> For Comments

//To display text in the screen
document.getElementById("myH1").textContent = `Hello`;
document.getElementById("myP").textContent = `How are you`;

//Variables in JS
//Declaration 
let x;
let y;

//Assign it to the value
x = 10;
console.log(x);

//To understand what type of variable it is 
console.log(typeof x);
//Integer data type variable
let age = 25;
let price = 25.06;
//To print it in the console
console.log(`The price is ${price}`);

//String data type variable
let firstName = `Agila`;

//To print it in the console
console.log(`The name is ${firstName}`);

//Boolean Data Type
let flag = false;

//To print it in the screen
document.getElementById("myP1").textContent = `My name is ${firstName} and my online status is ${!flag}`;
document.getElementById("myP2").textContent = firstName;

//Accept data from the user
//Easy Way - Window Prompt
//Professional Way - Using HTML textBox

//Window Prompt
let userage;

userage = window.prompt(`What is your age?`);
console.log(userage);
//If I need age in Number then, I need to convert its type by
userage = Number(userage);

//HTML Text Box
let username;
document.getElementById("MySubmit").onclick = function(){
    username = document.getElementById("textEntry").value;
    console.log(username);
    document.getElementById("myH1").textContent = `Hello ${username}`;
    
}

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

//For Max and min of elements
let x = 10;
let y = 20;
let z = 30;

let maxi = Math.max(x,y,z);
let mini = Math.min(x,y,z);

//Random Number
let randi = Math.random(); // Gives me a number between 0 and 1 with some long decimal portion

//Need a random number from 1 to 6
randi = Math.random() * 6;

//Not with decimal portion
randi = Math.floor(Math.random() * 6) //This will give me between 0 and 5

//We need 1 to 6, so in order to do set the minimum, we can add 1 to it

randi = Math.floor(Math.random() * 6) + 1;

//If I need from 50 to 100
const max = 100;
const min = 50;
randi = Math.floor(Math.random() * (max - min)) + min;

//Button.checked  --> For Radio Buttons to check if they are selected or not


// The partciular position at string
let lastName = "Senthil Kumar";

console.log(lastName.charAt(0)); // Returns 'S'

console.log(lastName.indexOf("S")) // Prints 0

console.log(lastName.length) // Prints the length of the string

// In case lastName = "Senthil      "

console.log(lastName.trim) // Trims the white spaces

lastName.toUpperCase

lastName.toLowerCase

lastName.repeat(3) // Repeats the string 3 times

let phone = "602-123-0567"

phone.replaceAll("-", "a"); //Replaces - with a


let first = username.slice(0,3) // Slices 0,1,2 -- characters into a seperate string

const email = "dummy@gmail.com";

let nameOf = email.slice(0, email.indexOf("@")); // Prints "dummy"
let domain = email.slice(email.indexOf("@") + 1); // Prints "gmail.com"

//Method Chaining = Calling one method after another in one continuous line of code

//NO METHOD CHAINING

let username = window.prompt(`Enter your name:`);
username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();
let extra = username.slice(1);
extra = extra.toLowerCase();
username = letter + extra;
console.log(username);

//METHOD CHAINING
let username = window.prompt(`Enter your name: `);
username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

console.log(username);

//While

let loggedIn = false;
let username;
let password;
while(!loggedIn)
{
    username = window.prompt(`Enter your username:`)
    password = window.prompt(`Enter your password:`)
    if(username === "myUserName" && password === "hwrfjnerf")
    {
        loggedIn = true;
    }

}

//Functions -- Defining a function - Parameters, Calling a function - arguments
function happyBirthday(username, age){
       bla bla bla
}

//Calling a function
happyBirthday("agila", 25)

//Default is sometimes a string , have to type cast it in order to apply any Math operations


//Array
let result = ["apple", "orange", "banana"];

//Display a particular element

console.log(result[0]);

//Few operations that can be done on arrays
result.push("pine")  // Pushes to the end of the array
result.pop() //Pops the last element
result.unshift("corn") //Pushes the element to the beginning of the array
result.shift() //Pops element from the beginning
result.length // Length of the array
result.indexOf("apple") // Index of apple

for(let r of result){
    console.log(r);     // Displays elements of the array
}

result.sort()  // Sort the array
result.reverse() // Reverse the array
Math.max(result) // Returns the maximum element in the array


//Spread Operator
let result1 = `Bro Code`;

let letters = [...result1];

console.log(letters); // Output : ['B','r','o',' ', 'C' .....]

//callback functions.
//If i need to call some function after one function ends
//Example Print "Hello" first and "GoodBye" second
hello(goodbye);

function hello(callback){
    console.log("Hello");
    callback();
}

function goodbye(){
    console.log("GoodBye");
}


const numbers = [1,2,3,4,5];
//Print the squares of each number

const squares = numbers.map(square);
console.log(squares);
function square(element){
    return Math.pow(element,2);
}

//function expressions --> where the function itself is called as an argument

const squares = numbers.map(function(element){
    return Math.pow(element,2);
});

//If you are gonna use the fucntion only once, the above can be useful

function hello(){
    console.log("Welcome");
}

hello();

//Now the above can be written in the form of arrow functions

//(parameters) => some code 
//Useful if the function is used only once
const hello = () => console.log("Welcome");

//Another example

const hello = (namer) => console.log(`Hi there ${namer}`);

hello("Aabfuiw");

//Question : find the square of the elements in the array numbers

const numbers = [1,2,3,4,5];
//Print the squares of each number

const squares = numbers.map(square);
console.log(squares);
function square(element){
    return Math.pow(element,2);
}

//Arrow function of the same
const squares = numbers.map((element) => Math.pow(element,2));
console.log(squares);

//Objects in Javascript --> A collection of related properties or methods
//Properties -- FirstName, LastName , etc, etc, 
//Methods -- functions 

const person1 = {
    firstName : "Bro", // Property
    lastName : "Code", // Property
    age : 25, // Property
    isEmployed : true, // Property
    say : function(){console.log("Hello")},
}
console.log(person1.firstName);
person1.say();

//this - reference to the object where this is used
//person.name = this.name
const person2 = {
    firstName : "Bro", // Property
    lastName : "Code", // Property
    age : 25, // Property
    isEmployed : true, // Property
    say : function(){console.log("Hello")},
    saySo : function(){console.log(`Hi, so my name is ${this.name}`)}, // this.name
}

//constructor - special method for defining the properties and methods for objects
//For different objects, each time the property called would be complicated

function Person(firstName, LastName, age,isEmplyoyed){
    this.firstName = firstName,
    this.LastName = LastName,
    this.age = age,
    this.isEmployed = isEmplyoyed,
}

const person1 = new Person("Hello", "World", 25, true);

//By this each time we dont have to keep defining the object that too when the properties are gonna be used again and again for different objects
console.log(person1.firstName);
console.log(person1.LastName);

//Errors 

//There are different types of errors that occur 
//For example, x is not been defined, but I still try to print x

try{
    console.log(x);
    if(dividend == 0)
    {
        throw new Error("You cant enter 0"); //The similar way it will be in the console.
    }
}
catch(error){ //Catch has a single argument
    console.error(error);
}


finally{
    console.log("You have reached the end"); //This will be executed no matter what
}

console.log("Lol") //This will not be executed if "console.log(x)" is not within the try, the catch method has caught the error

//Promise -- An object that manages Asynchronous operations.
            //Wrap a promise object around async code
            //new Promise((resolve,reject) => {async code})

//This is especailly used to avoid callback hell
//What is callback hell.
//For example I have three tasks to make 
//1. Walking Dog 2. Clean Kitchen 3. Wash vessels

function walkOutDog(callback){
    setTimeout(() => {
        console.log("Take a walk");
        callback();
    }, 1000);
}

function cleanKitchen(callback){
    setTimeout(() => {
        console.log("Kitchen cleaned");
        callback();
    }, 2000);
}

function washVessels(){
    setTimeout(() => {
        console.log("Vessels washed");
    }, 3000);
}

walkOutDog(() => {
    cleanKitchen(() => {
        washVessels(() => {
            console.log("all tasks done");
        });
    });
});

//Lines 374 to 380 is what a callback hell

//In order to avoid this callback hell, Promises are used 
//Promises are used to wrap them 
//Basically instead of callbacks use method chaining
//PENDING - resolve, reject
//new Promise((resolve, reject) => {async code})


function walkOutDog(){
    new Promise((resolve, reject) => {
        const talkOut = true;
        setTimeout(() => {
            if(talkOut){
                resolve("Take the dog for a walk");
            }
            else
            {
                reject("Get Off");
            }
        }, 1500);
    });
}

function washVessels(){
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Wash the vessels");
        }, 2000);
    });
}
walkOutDog().then(value => {console.log(value); return washVessels()})
            .then(value => {console.log(value); return cleanHouse()})
            .catch(error => console.log(error));

//fetch -- Fetch is a function basically used to make HTTP requests in order to fetch data from the resources

fetch("https://pokeapi.co/api/v2/pokemon/pikachu"); // It works on promise based thing.
    .then(response => {
        if(!response.ok){
            throw new Error("Could not fetch");
        }
        return response.json();
    });
    .then(data => console.log(data));
    .catch(error => console.error(error));









