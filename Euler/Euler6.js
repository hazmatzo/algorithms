//Sum square difference
//projecteuler.net/problem6
//Zoe Madden-Wood, 12/14/2013
//The sum of the squares of the first ten natural numbers is,
//  1*1 + 2*2 + ... + 10*10 = 385
// The square of the sum of the first ten natural numbers is,
//  (1 + 2 + ... + 10) * (1 + 2 + ... + 10) = 55 * 55 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
//Solution: 25164150

var solution = getSquareOfSum() - getSumOfSquares()
console.log(solution)

function getSumOfSquares() {
  var sumOfSquares = 0
  for (i = 1; i <= 100; i++) {
    sumOfSquares += i*i
  }
  return sumOfSquares
}

function getSquareOfSum() {
  var squareOfSum = 0
  var sumToSquare = 0
  for (i = 1; i <= 100; i++){
    sumToSquare += i
  }
  squareOfSum = sumToSquare * sumToSquare
  return  squareOfSum
}



