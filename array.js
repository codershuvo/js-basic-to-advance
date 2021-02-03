// Old Style
var arrayName = new Array ('Rahim', 'karim', 'rafiq', 'jabbar'); 
console.log(arrayName);

// New Style 
var arrayName = ['rahim', 'karim', 'rafiq', 'jabbar']; 
arrayName[2] = 'Safiq'; // set new value
console.log(arrayName[2]); // find 2 position
console.log(arrayName.length); // kotogula element ache
console.log(arrayName['length']); // kotogula element ache

// access all item in array
for (var i = 0; i < arrayName.length; i++) {
    console.log('Name ' + arrayName[i]);
}

// add new item last in array
arrayName.push('saikat');
console.log(arrayName);

// remove last item in array
arrayName.pop(); 
console.log(arrayName);

// remove first item in array 
arrayName.shift(); 
console.log(arrayName);

// add first item in array 
arrayName.unshift('shuvo'); 
console.log(arrayName);

// item er index jante
var index = arrayName.indexOf('shuvo'); 
console.log(index);

// remove element for index in array item
var age = [12, 15, 14, 65, 85];
var removeIndex = age.splice(2); 
console.log(removeIndex);


var newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]; 
var spliceArr = newArr.splice(1, 3); 
console.log(newArr);
console.log(spliceArr);