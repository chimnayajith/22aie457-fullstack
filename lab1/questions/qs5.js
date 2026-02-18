let numbers = [12, 7, 9, 20, 18];

let evenCount = 0;
let oddCount = 0;

for (let i = 0; i < numbers.length; i++) {

  if (numbers[i] % 2 === 0) {
    evenCount++;
  } 
  else {
    oddCount++;
  }
}

console.log("Even numbers:", evenCount);
console.log("Odd numbers:", oddCount);
