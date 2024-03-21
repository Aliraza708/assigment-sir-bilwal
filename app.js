console.log("question 1 start");
//    question   1  number 1 to 10

for (var i =1;i <=10; i++ ){
    console.log(i);
}

console.log("question 2 start");
// question 2  number even 1 to 20

for (var a = 1 ; a <=20; a++){
    if (a % 2 == 0 ){
        console.log (a +" "+ "this is even number");
    }
}


console.log("question 3 start");
// question 3  numbe odd 1 to 15

for (var a = 1 ; a <=15; a++){
    if (a % 2 == 1 ){
        console.log (a +" "+ "this is odd number");
    }
}
  
  console.log("question 4 start ")
  // question 4 string say hello
  
  for(var i= 1; i <= 10 ; i++){
    console.log(i + " Hello world")
  }




console.log("question 5 start");
// question 5  print 7 table 

for (var i = 1; i <=10; i++){
    console.log("7"+ " x "+ i +" " +  " = " + i*7)
}

console.log("question 6 start");

// question 6  squre for 1 to 10
   
for (var i = 1; i <= 10 ; i++){
    console.log("squre " + i +" "+ "is " + i * i)
}

//  question 7   Fibonacci series up to the 10th term.

console.log("question 7 start");
var n1 = 0, n2 = 1, nextTerm;

console.log("Fibonacci Series:");

for (var i = 1; i <= 10; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}

//  question 8  the largest element in an array (var's say [3, 7, 2, 9, 5]).

console.log("question 8 start");

var array = [3, 7, 2, 9, 5];
var largest = array[0]; 

for (var i = 1; i < array.length; i++) {
    if (array[i] > largest) {
        largest = array[i]; 
    }
}

console.log("Largest element in the array:", largest);






