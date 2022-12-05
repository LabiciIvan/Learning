// Ex 1 dublu primul numar cu functie si parametru//

let number = DoubleNumber(12);
function DoubleNumber(number1) {
    let result = number1 + number1;

    return result;
}
console.log(number)

//Ex 2 patratul unui numar cu functie si parametru//
let numbers = TheSquareOfaNumbers(2);
function TheSquareOfaNumbers(num1) {
    let squareNumber = num1 * num1;

    return squareNumber;
}
console.log(numbers);

//Ex 3 cel mai mare numar cu functie cu if else si parametru//

let compare = CompareNumberIfElse(2, 3);
function CompareNumberIfElse(number1, number2) {
    let result = "answer is ";

    if (number1 > number2) {

        result = number1;

        return "answer is " + number1;
    }
    else {
        (number2 > number1);

        result = number2;

        return "answer is  " + number2;
    }

}
console.log(compare);

//Ex 4 factorialul unui numar cu functie si parametru//
function factorial(n) {
    if (n == 0 || n == 1) {
        return 1;

    } else {
        return n * factorial(n - 1);
    }
}
let n = 5;
answer = factorial(n);

console.log(answer);

//Ex 5 numarul de litere cu ajutorul unei functii cu parametru//
let letters = numbersOfLetters("ma-ta");
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

    return count;
}

const string = prompt('Enter your word to count vowels: ');

const result = countVowel(string);

console.log(result);

// Ex 7 numarul de consoane dintru-un cuvant cu functie si parametru //

const consonant = ["b", "c", "d", "f", "g", "j", "k", "l", "m", "n", "p", "q", "s", "t", "v", "x", "z", "h", "r", "w", "y"]

function countConsonant(str) {

    let count = 0;
    for (let letter of str.toLowerCase()) {
        if (consonant.includes(letter)) {
            count++;
        }
    }

    return count;
}

const String = prompt('Introduce your word to count consonant: ');

const Result = countConsonant(string);

console.log(Result);