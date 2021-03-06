//свойытво СТРОКИ
myString.length;

// Возвращают мин и макс значения
// Math - Стандартные математические методы
Math.max();
Math.min();

Math.floor();
Math.ceil();
Math.round();

Math.random();
Math.floor(Math.random() * 10);

// Доступ к свойству
value.x; 	// Имя - значение
value[x]; 	// Имя выражение (может быть вычислено и строковым литералом)

// Масивы и объекты
var arr = []; 	// массивы в js только нумерованые
var obj = {};

var obj = {one: "one", two: "two"};
delete obj.two; // удалает свойство(не находится in)

typeof variable; // возвращает тип

"propertyName" in obj; // находится ли свойство в объекте "IN"

/* Передача значений
	в простых типах по значению
	в объектах(массивах) по сслылке
*/

// метод поиска значени в массиве, возвращает позицию или -1
arr.indexOf();
arr.lastIndexOf(); // поиск с конца


/* MAP - когда значение одного из свойств становится именем свойства
по сути это преобразоване в одномерный именованый массив */


// добавить вытащить конец массива
arr.push();
arr.pop();

// добавить вытащить значения из начала массива
arr.unshift();
arr.shift();

// возвращает кусок массива от и до
arr.slice(start, end);

// склейка массивов
arr.concat();


// почему об этом в книжках не пишут
str.link("http://address");

// удаляет пробелы и знаки перевода строки
str.trim();

// поиск элемента в строке
str.indexOf();
str.lastIndexOf();

// Какой элемент в позиции
str.charAt(pos)
str[pos]

/* внутри функции нам доступен объект arguments в котором содержится информация о переданных параметрах */

/* Глобальная область видимости global - объект для браузеров - window. */


/* JSON */
var string = JSON.stringify({name: "X", born: 1980});
console.log(string);
// → {"name":"X","born":1980}
console.log(JSON.parse(string).born);
// → 1980



////////////////////////////////////////
// Стндартные функции высшего порядка //
////////////////////////////////////////

// принимает функцию которую выполняет для каждого элемента массива
arr.forEach();
// Если внутренняя функция возвращает true получаем значение из текущей позиции рекурсии
arr.filter()
// Возвращает массив с значениями из возврата внутренней функции
arr.map
// reduce позволяет найти самого производя сравнение во внутренней функции
arr.reduce();

/*Для таких случаев у функций в JavaScript есть метод apply. Ему передают массив (или объект в виде массива) из аргументов, а он вызывает функцию с этими аргументами.*/
function transparentWrapping(f) {
  return function() {
    return f.apply(null, arguments);
  };
}


arr.every()
arr.some()


/*
	Функция Object.getPrototypeOf возвращает прототип объекта. Можно использовать Object.create для создания объектов с заданным прототипом.
 */

 // Объект без прототипа
 var map = Object.create(null);


 /*Но это потребовало бы от нас писать код вычисления их значений в конструкторе – а это плохо, поскольку конструирование объекта не связано с ними напрямую*/\

 // Есть два популярных подхода к использованию модулей. Один – CommonJS, построенный на функции require, которая вызывает модули по имени и возвращает их интерфейс. Другой – AMD, использующий функцию define, принимающую массив имён модулей и, после их загрузки, исполняющую функцию, аргументами которой являются их интерфейсы.

 // Это сводит на нет преимущество обработки исключений, а именно, возможность централизованно обрабатывать ошибки.
