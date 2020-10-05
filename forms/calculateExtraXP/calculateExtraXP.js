/*
num1 = parseInt(prompt("Enter the first number"))
num2 = parseInt(prompt("Enter the second number"))
num3 = parseInt(prompt("Enter the third number"))

let pick = prompt("Do you want to do an average calculation or a random multiplication?").toLowerCase()
let random = (Math.floor(Math.random()*10)+1)

function calcAvgSquare(numOne,numTwo,numThree){
  average = (numOne + numTwo + numThree)/3
  square = numOne*numOne
  avgSquare = average*square
  return avgSquare
  }

function randomMultiply (numFour){
  product = numFour * random
  return product
  }

if (pick == "random multiplication"){
  let num4 = parseInt(prompt("Enter the number to multiply"))
  alert(`The result of multiplying the random number ${random} with ${num4} is ${randomMultiply(num4)}`)
}
else {
alert( `The answer is ${calcAvgSquare(num1,num2,num3)}`)
}
*/