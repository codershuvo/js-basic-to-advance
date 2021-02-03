// old style
var rahim = new Object ()

// new style 
var rahim = {
    fullName: 'Rahim Miya', 
    age: 21,
    address: 'Dhaka',
    job: 'Job Holder'
}
console.log(rahim.fullName); // dot . notetion
console.log(rahim['fullName']); // bracket [] notetion
rahim.zipCode = 3517; // add new item
console.log(rahim);
rahim.job = 'Student'; // change item value
console.log(rahim); 


// access function in object 
rahim.welcomeMsg = function () {
    console.log('Hello There');
}
console.log(rahim.welcomeMsg()); 



// function variable store
var rahim = {
    fullName: 'Rahim Miya', 
    age: 21,
    address: 'Dhaka',
    job: 'Job Holder',
    welcomeMsg : function () {
        console.log('Hello There'); 
    }
}
console.log(rahim);

// acces item in loop
for (item in rahim) {
    console.log(item);
}



// object in array 
var objArr = {
    normal: 'Normal Item', 
    name: ['rahim', 'karim', 'rafiq', 'shafiq'], 
    age: [10, 20, 30, 40, 50]
}
console.log(objArr);
var name2 = objArr.name[2]; // access item index array in object
console.log(name2);


// array in object 
var arrObj = [
    'shuvo', 
    {
        name: 'mosfiqur', 
        age: 24, 
        job: 'student'
    }, 
    'Bangladesh'
]
console.log(arrObj);
var accessItem = arrObj[1]; 
console.log(accessItem);