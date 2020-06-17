function add(num1, num2) {
    let sum = num1 + num2
    return +sum.toFixed(14)
}
function subtract(num1, num2) {
    let difference = num1 - num2
    return +difference.toFixed(14)
}
function multiply(num1, num2) {
    let product = num1 * num2
    return +product.toFixed(14)
}
function divide(num1, num2) {
        let quotient = num1 / num2
    return +quotient.toFixed(14)


}
function operate(num1, operator, num2) {
    num1 = Number(num1)
    num2 = Number(num2)
    if (operator == '+') {
        let result = add(num1, num2)
        return result
    }
    if (operator == '-') {
        let result = subtract(num1, num2)
        return result
    }
    if (operator == '*') {
        let result = multiply(num1, num2)
        return result
    }
    if (operator == '/') {
        let result = divide(num1, num2)
        return result

    }
}
let num1 =''
let num2 =''
let display =''
let operator = ''
const header = document.querySelector('.header')
const clear = document.querySelector('.clear')
clear.addEventListener('click', (e) => {
    num1 =''
    num2 =''
    display =''
    operator =''
    header.textContent = display
})
const numbers = document.querySelectorAll('.number')
numbers.forEach((number) => {
    number.addEventListener('click', (e) => {
        display += number.id
        header.textContent = display
        if (operator == '') {
        num1 += number.id}
        else {
            num2 += number.id
        }
        
    })
    })
const operators = document.querySelectorAll('.op')
operators.forEach((op) => {
    op.addEventListener('click', (e) => {
        if(operator == '') {
        display += ' ' + op.id + ' '
        header.textContent = display
        operator = op.id
        }
        else {
            if(num2 == '0' && operator == '/') {
                header.textContent = "Don't divide by 0, silly!"
                operator = ''
                num1 = ''
                num2 = ''
                display = '0'
            }
            else {
            let result = operate(num1, operator, num2)
            header.textContent = result + ' ' + op.id + ' '
            num1 = '' + result
            num2 = ''
            display = result + ' ' + op.id + ' '
            operator = op.id
            }
        }
    })
})
const equals = document.querySelector('#equals')
equals.addEventListener('click', () => {
    if(num2 == '0' && operator == '/') {
        header.textContent = "Don't divide by 0, silly!"
        operator = ''
        num1 = ''
        num2 = ''
        display = '0'
    }
    else {
    let result = operate(num1, operator, num2)
    header.textContent = result
    num1 = '' + result
    num2 = ''
    display = result
    operator = ''
    }

})