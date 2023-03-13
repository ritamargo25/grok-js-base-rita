/*
Создайте функцию, которая убирает из строки символ "_", 
а следующую за "_" букву делает заглавной

Для начала пропиши аргументы функции.  

Пример: 'web_development' => 'webDevelopment'
*/

const camelCase = (str) => {
    str = 'hello_world';
    let newCamelCase = str.replace('_', '').replace('w', 'W')

    return newCamelCase

}
module.exports = camelCase