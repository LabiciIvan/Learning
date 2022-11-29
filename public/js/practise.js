// Ex 1 dublu primul numar cu functie//

DobleNumber()
function DobleNumber() {
    let x = 1;
    x += 1;
    console.log(x)
}

//Ex 1 dublu al doilea numar cu functie//
DoubleNumber1()
function DoubleNumber1() {
    let y = 2;
    y += 2;
    console.log(y);
}

//Ex 2 patratul unui numar cu functie//
TheSquareOfaNumbers()
function TheSquareOfaNumbers() {
    let z = 1;
    z *= 1;
    console.log(z);

    let w = 2;
    w *= 2;
    console.log(w);

    let q = 3;
    q *= 3;
    console.log(q);
}

//Ex 3 cel mai mare numar cu functie//
CompareNumber()
function CompareNumber() {
    let x = 1;
    let y = 3;
    console.log(x < y)
}

CompareNumber1()
function CompareNumber1() {
    let x = 15;
    let y = 4;
    console.log(x > y);
}

CompareNumber2()
function CompareNumber2() {
    let x = 1;
    let y = 1;
    console.log(x = y);
}

//Ex 3 cel mai mare numar cu functie cu if else//

CompareNumberIfElse()
function CompareNumberIfElse() {
    let result = "answer"
    let number1 = 3;
    let number2 = 3.1;

    if (number1 > number2) {
        result = "answer" + number1;

    }
    else {
        (number2 > number1);
        result = "answer" + number2;
    }
    console.log(result);
}

//Ex 4 factorialul unui numar cu functie//

function factorial(n) {
    if (n == 0 || n == 1) {
        return 1;

    } else {
        return n * factorial(n - 1);
    }
}
let n = 4;
answer = factorial(n);
console.log(answer);

//Ex 5 numarul de litere cu ajutorul unei functi//

numbersOfLetters()
function numbersOfLetters() {
    let text = "ana";
    let lenght = text.length;
    console.log(text.length);

    let text2 = "apple";
    let length = text2.length;

    console.log(text2.length);
}

// Ex 6 numarul de consoane dintr-un numarul//

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