/*

Создайте функцию, которая принимает в качестве аргументов 2 неотрицательных числа, 
а возвращает сумму всех целых чисел в диапазоне между ними.

Первое число может больше второго!

Пример: (5, 3) => 12

*/

const sumOfIntegers = (start, end) => {
    let sum = 0;
    for (let i = Math.min(start, end); i <= Math.max(start, end); i++) {
        sum += i;
    }
    return sum;
}

module.exports = sumOfIntegers
