// переменная с типом число
var myNumber;
// переменная с типом строка
var myString;
// переменная с типом 2 или 3
var twoOrThree;
// переменная с типом строка или булево или undefined
var StringOrBoolOrNothing;
// переменная с типом массива строк
var arrayOfString;
// переменная с типом массива строк или чисел
var arrayOfStringOrNumbers;
// переменная с типом массива (кортежа) из трех элементов: первый - строка, второй число, третий объект с полями id (число) и label (строка)
var myTuple;
// переменная с типом объекта ключи которого любая строка, а значения строка или число
var myCollectionOfNumberOrString;
// Переписать объект на enum
var USER_ROLES;
(function (USER_ROLES) {
    USER_ROLES["ADMIN"] = "admin";
    USER_ROLES["GUEST"] = "guest";
    USER_ROLES["UNKNOWN"] = "unknown";
})(USER_ROLES || (USER_ROLES = {}));
;
;
;
;
// Затипизировать входящие параметры "x" и "y" как числа и возвращаемое значение
var sumTwoNumbers = function (x, y) { return x + y; };
// Затипизировать входящие параметры "x", "y" и "z" как числа. Параметр "z" должен быть необязательным. Написать корректную реализацию функции с учетом необязательности "z"
var sumThreeNumbers = function (x, y, z) {
    if (z === void 0) { z = 0; }
    return x + y + z;
};
function sum(x, y) {
    if (typeof x === "number" && typeof y === "number") {
        return x + y;
    }
    else {
        return "".concat(x, " ").concat(y);
    }
}
// Затипизировать this
function getName(id) {
    return this[id].name;
}
// Затипизировать возвращаемое значение
var sayHi = function () {
    console.log('hi');
};
// переменная с типом строка, начинающаяся с префикса "id:" и дальше числовое id. Например, let myId = 'id:2'
var prefixedId = "".concat("id").concat(number); // Как в переменную положить неизвесное число типа number?
// Нам точно известно, что в качестве параметра "x" придет число. Изменять типизацию функции (параметров или возвращаемого значения) нельзя.
var f = function (x) {
    // На данной строке нужно исправить текущую ошибку путем приведения типа "x" от текущего число или строка к только число
    return x;
};
// переменная с типом массива строк, который нельзя изменять (например, пушить в него значения)
var readonlyStringArray;
// Сделать переменную неизменяемой (чтобы на уровне типизации ее нельзя было мутировать) ?
var USER = {
    id: 1,
    name: 'Alex'
};
var getArea = function (shape) {
    if (shape.type === "circle") {
        var circleArea = Math.PI * Math.pow(shape.radius, 2);
        return circleArea;
    }
    return Math.pow(shape.side, 2);
    // if(shape.type === "square") {
    //   const squareArea = Math.pow(shape.side, 2);
    //   return squareArea;
    // }
};
// У функции toLowerCase ошибка типизации т.к. value может быть числом, а у числа нету метода toLowerCase. Изменять типизацию функции (параметров или возвращаемого значения) нельзя.
// Нужно решать проблему любыми двумя способами. ?
var toLowerCase1 = function (value) {
    if (typeof value === "string") {
        return value.toLowerCase();
    }
    return value;
};
var toLowerCase2 = function (value) {
    return value.toLowerCase();
};
// У функции log ошибка типизации, т.к. метод log есть только у класса Logger. Изменять типизацию функции (параметров или возвращаемого значения) нельзя.
// Нужно исправить функцию так, чтобы метод лог вызывался только в случае если value - инстанс класса Logger, иначе логировать value c помощью console.log
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.prototype.log = function () { };
    ;
    return Logger;
}());
var log = function (value) {
    if (value instanceof Logger) {
        value.log();
    }
};
