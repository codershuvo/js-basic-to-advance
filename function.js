function funcName () {
    // Statements
}

var funcName = function () {
    // Statement
}
funcName(); // call the function


function functionName() {
    console.log('Hello I am from the function'); 
}
functionName();


function aFunc(parameters) {
    // do something with the parameters
    // return the result
}
// aFunc(arguments);



// function pass parameters and arguments
function sumMachine (a, b) {
    var sum = a + b; 
    return sum
}
console.log(sumMachine(5, 10));
console.log(sumMachine(7, 5));

function printMyName (name, age) {
    console.log('My name is: ' + name + ' and I am ' + age + ' years old!'); 
}
console.log(printMyName("Mosfiqur Rahman", 23)); 


// add function for argument
function callMyName (name, callback) {
    var myAge = 24; 
    callback(myAge); 
    console.log('It is interesting ? Yes it is Mr. ' + name); 
}
function hello (age) {
    console.log("I am passed through argument and my age is: " + age); 
}
callMyName('Mosfiqur Rahman', hello); 



// return function in function 
function welComeMsg (name) {
    console.log('Welcome Mr. ' + name); 
    return function option (menu) {
        console.log('Do you like ' + menu + ' Mr. ' + name);
    }
}
welComeMsg('Mosfiqur Rahman') ('Coffee');




function changeValue (a) {
    console.log('Value of a inside function before changing: ' + a); 
    a = 10; 
    console.log('Value of a inside function after changing: ' + a); 
    return a; 
}
var a = 100; 
console.log('Value of a before changing function is applied: ' + a); 
changeValue(a)
console.log('Value of a after changing function is applied: ' + a); 



function aFunc (a) {
    console.log('Before changing the property: ' + a.one); 
    a.one = 'two'; 
    console.log('After changing the property: ' + a.one); 
}

var a = {
    one: 'one'
}

aFunc(a);



// function definition
function aSimpleFunc () {
    console.log('A Simple Function'); 
}

// calling function
aSimpleFunc(); 