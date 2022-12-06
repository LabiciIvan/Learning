// Ex 1 dublu primul numar cu functie si parametru//

let number = DoubleNumber(12);
function DoubleNumber(number1) {
    let result = number1 + number1;

    return "the result is " + (number1 + number1);
}
console.log(number)

//Ex 2 patratul unui numar cu functie si parametru//
let numbers = TheSquareOfaNumbers(3);
function TheSquareOfaNumbers(num1) {
    let squareNumber = num1 * num1;

    return "result is " + (num1 * num1);
}
console.log(numbers);

//Ex 3 cel mai mare numar cu functie cu if else si parametru//

let compare = CompareNumberIfElse(2, 3);
function CompareNumberIfElse(number1, number2) {
    let result = "answer is ";

    if (number1 > number2) {

        result = number1 > number2;

        return "answer is " + number1;
    }
    else {
        (number2 > number1);

        result = number2 > number1;

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

    return "you have " + text.length + " letter in the word";
}
console.log(letters)

// Ex 6 numarul de consoane dintr-un numarul cu functie si parametru//

const vowels = ["a", "e", "i", "o", "u"];

function countVowel(str) {

    let count = 0;

    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }

    return "your number of vowels is " + count;
}

const string = prompt('Enter your word to count vowels: ');

const result = countVowel(string);

console.log(result);

// Ex 7 numarul de consoane dintru-un cuvant cu functie si parametru //

const consonant = ["b", "c", "d", "f", "g", "j", "k", "l", "m", "n", "p", "q", "s", "t", "v", "x", "z", "h", "r", "w", "y", "B", "C", "D", "F", "G", "J", "K", "L", "M", "N", "P", "Q", "S", "T", "V", "X", "Z", "H", "R", "W", "Y"];

function countConsonant(str) {

    let count = 0;
    for (let letter of str.toLowerCase()) {
        if (consonant.includes(letter)) {
            count++;
        }
    }

    return "your number of consonant is " + count;
}

const String = prompt('Introduce your word to count consonant: ');

const Result = countConsonant(string);

console.log(Result);

// Ex 8 majuscule cu functie si parametru//

let change = changeToUpperCase("milf")
function changeToUpperCase(text) {

    let change = text.toUpperCase();

    return "text changed format and your word now is " + text.toUpperCase();
}

console.log(change);

// Ex 9 scris cu litere mici cu functie si parametru //

let swap = changeToLowerCase("MILF")
function changeToLowerCase(text) {

    let swap = text.toLowerCase();

    return "text changed format and your word now is " + text.toLowerCase();
}

console.log(swap);


// Ex 10 formatare cuvinte cu ajutorul functie si parametru //