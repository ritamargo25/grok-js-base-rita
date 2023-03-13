/*

Создайте функцию, которая принимает в качестве аргументов три неотрицательных числа, 
а возвращает значение true («истина»), если три стороны могут сформировать треугольник,
и false («ложь») в противоположном случае.  
Каждое число представляет собой длину стороны треугольника. 

Пример: (3, 4, 5) => true  

Для начала пропиши аргументы функции.  

*/

const validTriangle = (a, b, c) => {
    if (a <= 0 || b <= 0 || c <= 0) {
        return false //числа не должны быть отрицательными
    }
    if (a + b <= c || b + c <= a || a + c <= b) {
        return false // сумма 2 сторон не должна быть меньше или равной третье стороне
    }
    else
        return true
}

module.exports = validTriangle
