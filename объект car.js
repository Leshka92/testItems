"use strict";

//Создадим функцию 4 произвольных массива для будущего объекта
function makeCar() {

var makes = ["Toyota", "Fiat", "Mazda", "Vaz", "BMW", "Audi"];
var models = ["Prado", "Albea", "CX-7", "Patriot", "X6", "A5"];
var years = [2010, 2005, 2015, 2008, 2018, 2019];
var colors = ["red", "blue", "green", "yellow", "white", "black"];
var converiable = [true, false];

//Далее сгенерируем случайным образом комбинации массивов

var rand1 = Math.floor(Math.random() * makes.length);
var rand2 = Math.floor(Math.random() * models.length);
var rand3 = Math.floor(Math.random() * years.length);
var rand4 = Math.floor(Math.random() * colors.length);
//Случайное число будет задавать кол-во пассажиров
var rand5 = Math.floor(Math.random() * 5) + 1;
//Случайное число для определения откидного верха
var rand6 = Math.floor(Math.random() * 2);

//А вот и наш объект car

var car = {
  make: makes[rand1],
  model: models[rand2],
  year: years[rand3],
  color: colors[rand4],
  passangers: rand5,
  converiable: converiable[rand6],
  mileage: 0
};
return car;
}
// Возвратим нашу ф-цию
function displayCar(car) {
  alert("Это новая машина " + car.make + " " + car.year + " " + car.model + " с пробегом " + car.mileage + " километров" + " цвета " + car.color);
}
//Вызовем ф-цию makeCar и присвоим ее значение новой переменной
var carToSell = makeCar();
displayCar(carToSell);

