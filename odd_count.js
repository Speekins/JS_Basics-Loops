//Write a while loop that logs all odd natural numbers between 1 and 40.

let oddCount = 1;

while (oddCount < 40) {
  if (oddCount % 2 === 1) {
    console.log(oddCount);
  }
  oddCount += 1;
}
