// Ex 1 dublu primul numar cu functie si parametru//

DobleNumber(1, 2)
function DobleNumber(number1, number2) {
    let number = number1 += number2;

    console.log(number);
}


//Ex 2 patratul unui numar cu functie si parametru//
TheSquareOfaNumbers(2, 2)
function TheSquareOfaNumbers(num1, num2) {
    let squareNumber = num1 *= num2;

    console.log(squareNumber);
}


//Ex 3 cel mai mare numar cu functie cu if else si parametru//

CompareNumberIfElse(5, 3)
function CompareNumberIfElse(number1, number2) {
    let result = "answer is "

    if (number1 > number2) {
        result = "answer is " + number1;

    }
    else {
        (number2 > number1);
        result = "answer is " + number2;
    }
    console.log(result);
}

//Ex 4 factorialul unui numar cu functie si parametru//
function factorial(n) {
    if (n == 0 || n == 1) {
        return 1;

    } else {
        return n * factorial(n - 1);
    }
}
let n = 5
answer = factorial(n);

console.log(answer);

//Ex 5 numarul de litere cu ajutorul unei functii cu parametru//
numbersOfLetters("ma-ta")
function numbersOfLetters(text) {

    let letter = text.length;

    console.log(text.length + ' ' + "number of letters in word");
}

// Ex 6 numarul de consoane dintr-un numarul cu functie si parametru//

const vowels = ["a", "e", "i", "o", "u"]

function countVowel(str) {

    let count = 0;

    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }

    return count
}

const string = prompt('Enter your world: ');

const result = countVowel(string);

console.log(result);