
// OPERATOR 
// Arithmentic Oparator 
var a = 100; 
var b = 3; 
console.log(a + b, a - b, a * b, a / b, a % b); // +, -, *, /, % : modulas; 

var c = 10; 
c++; // + 1 korar jonno  ++ : incriment
console.log(c);

var d = 10; 
d-- // - 1 korar jonno  ++ : decriment
console.log(d);




// Comparison Oparator  
var a = 10; 
var b = 20; 
console.log(a == b); // soman hole true na hole false ==

console.log(a != b); // soman na hole true hole false !=

console.log(a > b); 
console.log(20 > 10); // 20 ki 10 er theke boro >

console.log(a < b); 
console.log(5 < 10);  // 5 ki 10 er theke choto <

console.log(a >= b); 
console.log(10 >= 10); // 10 ki 10 er theke boro ba soman >=

console.log(a <= b); 
console.log(20 <= 10); // 20 ki 10 er theke choto ba soman <=


console.log(10 == "10"); 
console.log(10 === "10"); // string er sathe number soman hobe na  ===





// Logical/Relational Oparator
console.log((10 < 20) && (30 > 20) && (5 > 10));  // and (&&-sobgula sotto korar jonno) sotto hole true mittha hole false &&

console.log((10 < 20) || (30 > 20) || (5 > 10));  // or (||-j kono ak ta othoba) j kono ak ta sotto hole ||





// Assignment Oparator
var a = 10; 
a += 10; // nijer songe nijer valu jog kora asign kore  +=
console.log(a);

var b = 20;
b -= 10; // nijer songe valu biyog kora asign kore  -=
console.log(b);

var c = 5;
c *= 5; // nijer songe valu gun kora asign kore  *=
console.log(c);

var d = 5;
d /= 5; // nijer songe valu vag kora asign kore  /=
console.log(d);

var e = 13;
e %= 5; // e = e % 5; nijer songe valu vag kora asign kore  /=
console.log(e);




// Conditional/Ternary Oparator 
var a = 10; 
var b = 20
var f = a > b ? 100 : 200;  // ? a jodi b er theke boro hoi tahole 100 na hole 200  ?
console.log(f);
