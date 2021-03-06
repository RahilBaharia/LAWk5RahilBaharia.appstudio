function Calculate(num1, num2) {
    let answer = num1 + num2
    return answer
}

let number1 = prompt('Enter your first number:')
let number2 = prompt('Enter your second number:')
number1 = parseInt(number1)
number2 = parseInt(number2)
let newAnswer = Calculate(number1, number2)
console.log(`The answer is ${newAnswer}`)
