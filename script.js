var isNum = 5;
var isStr = 'Hi'
var isBoolean = true;
var isNull = null;
var isObj = {name:'Nasty', lastname:'Grigor', age:'29'};
var isUnderfind = undefined;

console.log(typeof(isNum));
console.log(typeof(isStr));
console.log(typeof(isBoolean));
console.log(typeof(isNull));    //  Тут был вопрос с подвохом. На самом деле тип у null не показывается. Это общепринятая ошибка в JavaScript. Значение null будет object. Я думал ты укажешь об этом )
console.log(typeof(isObj));
console.log(typeof(isUnderfind));

var Num = 2; //так задавать переменную нельзя, начиная с цифры и раздельно несколько слов тоже нельзя
// Num -  так можно. 
// Можно:    num;   Num;   firstNum;   num1;   num_1;   _;   $;
// Нельзя:   1num; first-num;  
var _num = 4; //так можно

console.log('Hello world');

console.log(isNum==Num && _num>Num);      // Оригинально. Но я ждал ответа )) Ответ будет: false 

_num = 9;

console.log(isNum==5 || isNum>_num);      // Ответ будет: true  
console.log(5>2 && 7>12 || 7>3 && 6<8);   // Ответ будет: true  

// if(7>3){ 
//     alert('Hello everybody')
//   } - вылезет модальное окно с фразой "Hello everybody", т.к. условие 7>3 верное

// if(5>8 && 2>1){              Условие неверное (false), следовательно заходит в блок else
//     alert('Hello')  
//   }else{
//     alert('Bye Bye')         Ответ - модальное окно (Bye Bye)
//   }

console.log(8%3);    // Ответ будет 2. Это остаток от деления
