"use strict";
alert ('Hello');

var a;
var b;



// Функуция возводить указанное число в указанную степень
// a - указанное число
// b - степень возведения, целое число, не равно нулю

function pow(a, b) {
  var sum = b;

  for (var i = 1; i < b; i++) {
    sum *= a;
  }

  return sum;
}

var a = prompt("укажите число которое хотите возвести в степень a=", '');
var b = prompt("укажите степень возведения b=", '');


  alert( pow(a, b) );
