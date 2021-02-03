// if statement
if (3 < 5) {
    console.log('Yeah I will be excecuted'); 
}

var myName = 'mosfiqur'; 
if (myName === 'mosfiqur') {
    console.log('You are allowed!'); 
}

var myName = 'mosfiqur'; 
if (myName === 'zonayed') {
    console.log('You are allowed!'); 
}

var myAge = 20; 
if (9 > 10) {
    console.log('Good to go'); 
}
if (myAge >= 20) {
    console.log('You are adult!'); 
}
if (myAge < 20) {
    console.log('you are not adult!');
}

var myAge = 21; 
if (myAge > 20 && myAge < 60) {
    console.log('You are a young person'); 
}

// if.....else statement
var age = 24; 
if (age > 28) {
    console.log('Now you are Adult!'); 
} else {
    console.log('No You are not aged enough to be an Adult'); 
}

// if......else if statement 
var whatDay = 'sunday'; 
if (whatDay === 'friday') {
    console.log('it is closed today'); 
} else if (whatDay === 'thursday') {
    console.log('it is partially closed'); 
} else if (whatDay == 'saturday') {
    console.log('some offices are closed today'); 
} else {
    console.log('It normal working day today'); 
}

var num = 10; 
if (num > 1) {
    if (num > 10) {
        console.log('Greater than 10');     
    } else {
        console.log('Somewhere between 2 - 10'); 
    }
}



// task most bigger number
var a = 99999; 
var b = 999999; 
var c = 300000000; 
if (a > b) {
    console.log('a is bigger'); 
} else if (b > c) {
    console.log('b is bigger')
}
else {
    console.log('c is bigger'); 
}





// stitch statement 
var weekDay = "Friday"; 
switch (weekDay) {
    case 'Saturday':
        console.log('Saturday ! Today is closed'); 
        break; 
    case 'Sunday':
        console.log('Sunday ! It is normal day'); 
        break; 
    case 'Monday':
        console.log('Monday ! It is normal day'); 
        break; 
    case 'Twesday':
        console.log('Twesday ! It is normal day'); 
        break; 
    case 'Wednesday':
        console.log('Wednesday ! It is normal day'); 
        break; 
    case 'Thursday':
        console.log('Thursday ! It is normal day'); 
        break; 
    case 'Friday':
        console.log('Friday ! It is normal day'); 
        break; 
    default: 
        console.log('Not a Day'); 
}


var rollNo = 16; 
switch (rollNo) {
    case 1:
        console.log('Asif'); 
        break;
    case 2:
        console.log('Jony'); 
        break;
    case 3:
        console.log('Anik'); 
        break;
    case 4:
        console.log('Mohon'); 
        break;
    case 5:
        console.log('Atik'); 
        break;
    case 6:
        console.log('Shuvo'); 
        break;
    case 7:
        console.log('Sohag'); 
        break;
    case 8:
        console.log('Susmit'); 
        break;
    default:
        console.log("Other's"); 
}