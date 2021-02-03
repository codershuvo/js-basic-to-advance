// for loop
for (var i = 0; i < 10; i++) {
    console.log('Go ' + i + ' step');
}


// do...whilewhile
var num = 15;
do {
    console.log('Inside the Loop, num is: ' + num);
    num += 1; 
} while (num < 10); 
console.log('Outside the Loop');



// while statement -----------
var num = 20; 
do {
    console.log('Inside the Loop, num is: ' + num); 
    num += 1; 
} while (num < 20); 
console.log('Outside the Loop'); 



// break statement -------------
for (var i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log('i is now at: ' + i);
}



// continue statement 
for (var i = 0; i < 10; i++) {
    if (i === 5) {
        console.log(i + ' is skipped'); 
        continue; 
    }
    console.log('i is now at: ' + i);
}