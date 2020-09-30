/*Loop for adding all the numbers bettwen 0 and 1000 with break > 400*/
let num = 0;
let sum = 0;
for (num = 0; num <= 1000; num ++) {
    sum += num;//or sum = sum + num;
    if (sum > 400) break;
}
console.log("Sum: " + sum);//or console.log("Sum is", sum)

/*Loops: Show numbers from 0 to 10*/
let currentNumber = 0;
for (let currentNumber = 0; currentNumber < 10; currentNumber++) {
    alert (`Number ${currentNumber}`);
}
console.log ("currentNumber: ", currentNumber);

/*Loops: Show numbers from 100 to 0*/
for (let currentNumber = 100; currentNumber > 0; currentNumber--) {
}
console.log ("currentNumber: ", currentNumber);

/*Loops: Show even numbers between 0 and 100*/
for (let currentNumber = 0; currentNumber < 100; currentNumber++) {
    if ((currentNumber - 1) % 2) {
    }
}
console.log ("currentNumber: ", currentNumber)

/*Loops: With the mentioned output*/
for(let row = 1; row <=13; row++) {
  let star = "";
  
  for(let star = 1; star <= row; star++) {
    star = star + "*"; //Or star = star + "*"
  }
console.log (star);
}
// Other ways: let stars=""; for (let count=1; count<=13; count++){ stars+="*"; console.log(stars);}//

for(let row = 1; row <=13; row++) {
    let star = "";
    
    for(let starCount = 1; starCount <= row; starCount++) {
      star += "*"; //Or star = star + "*"
    }
  console.log (star);
  }