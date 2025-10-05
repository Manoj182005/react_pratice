//transfer the functin using map function 
const numbers = [2, 4, 6, 8, 7];

function transformNumbers(numbers) {

  return numbers.map(function (num) {
    let squred = num * num;
    if (squred % 2 == 0) {
     return squred*2
    } else {
      return squred;
    }
  });

  // Square the number, and if it's even, double its value after squaring it
}
console.log(transformNumbers(numbers));