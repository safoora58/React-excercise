//declaration function syntax
function showValue() {
    console.log('React');
}

//expression function syntax
let showValue2 = function () {
    console.log('React Js');
}

//arrow function syntax
let showValue3 = () => {
    console.log('React Js :)');
}
showValue();
showValue2();
showValue3();



//arrow function example
let sum = (a, b) => {
    return a + b;
}
console.log('sum:', sum(5, 10));

//arrow function summary
let sum2 = (a, b) => a + b;
console.log('sum:', sum(15, 10));

let doubleNum = num => num * 2;
console.log('double:', doubleNum(6));

//arrow function example
let makeUser = (id, name) => ({ id: id, name: name });
console.log('user:', makeUser(20, 'ava'));

//arrow function example
let users = [
    { id: 1, name: 'ava', age: 15 },
    { id: 2, name: 'ilya', age: 10 },
    { id: 3, name: 'akbar', age: 45 },
    { id: 4, name: 'amir', age: 20 },
    { id: 5, name: 'babak', age: 37 }
]

users.forEach(user => console.log(user));

let mainUser = users.find(user => user.name === 'ilya');
console.log(mainUser);


///////////////////////////////////////////////////////rest operators
// function showValue(value) {
//     console.log(value);
// }
// showValue('react');

function sumNum(a, b, c) {
    console.log(a + b + c);
}
sumNum(10, 20, 30);

//argument in decleration function
function sumNum2(a, b, c) {
    console.log(arguments);
    console.log(arguments[0] + arguments[1] + arguments[2]);
}
sumNum2(10, 20, 30);

//argument in expression function
let sum3 = function (a, b, c) {
    console.log(arguments);
    console.log(arguments[0] + arguments[1] + arguments[2]);
}
sum3(50, 20, 30);

//argument in arrow function is not defined
// let sum4 = (a, b, c) => {
//     console.log(arguments);
//     console.log(arguments[0] + arguments[1] + arguments[2]);
// }
// sum4(50, 20, 30);



//////////////////////////////////////////////////////////rest operators in arrow function instead of argument
let sum5 = (...args) => {
    console.log(args);
    console.log(args[0] + args[1] + args[2]);
}
sum5(50, 20, 30);


let sum6 = (a, b, c, ...args) => {
    console.log(a, b, c);
    console.log(args);
    console.log(args[0] + args[1] + args[2]);
    console.log(b + c);
}
sum6(50, 20, 30, 40, 50, 60);



/////////////////////////////////////////////////////////////////////////////spread syntax
let users2 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];
console.log(users2);
console.log(users2[0], users2[1], users2[2], users2[3], users2[4], users2[5], users2[6], users2[7]); // wrong
console.log(...users2); //correct

let users3 = ['babak', 'ali', 'ilya', 'reza', 'amir', 'amin', 'arash', 'akbar'];

console.log(...users2, ...users3);

let allUsers = [users2, users3];
let allUsers1 = [...users2, ...users3];
console.log(allUsers);
console.log(allUsers1);

//another example 
let cars = ['benz', 'bmw', 'reno'];
let colors = ['blue', 'red', 'yellow'];
function showNewCar(...colorcars) { //rest operator
    colorcars.forEach(colorcar => console.log(colorcar));
    console.log(colorcars);
}
showNewCar(...cars, ...colors); //spread operator



////////////////////////////////////////////////////////////////////array destructuring
let array = [12, 'ilya', 'true', 'amir', 23, 'true'];

// let item1 = array[0];   //wrong
// let item2 = array[1];
// let item3 = array[2];
// let item4 = array[3];
// let item5 = array[4];

let [item1, item2, item3, ...otherItems] = array;  //correct
console.log(item1, item2, item3, otherItems);

//ignore in array destructuring
let [tem1, tem2, , tem3, ...others] = array;
console.log(tem1, tem2, tem3, others);

//default value in array destructuring
let [a, b = 6] = [10];
console.log(a, b);


//////////////////////////////////////////////////////////////////object destructuring  
let obj = { id: 1, name: 'ilya', family: 'bazdaran', age: 10 };

// let id = obj.id;  //wrong
// let name = obj.name;
// let family = obj.family;
// let age = obj.age;

let { id, name, family, age } = obj;  //correct
console.log(id, name, family, age);


//////////////////////////////////////////////////////////////////ternary operator
let aa = 10;
let bb = 20;

// if(aa > bb){
//     console.log('aa is bigger');
// }else{
//     console.log('bb is bigger');
// }

let cc = aa > bb ? 'aa is bigger' : 'bb is bigger';
console.log(cc);

////////////////////////////////////////////////////////////////// module 
import { userNamee, car, double } from "./utils.js";
console.log(userNamee, car, double(5));

import * as allUtils from "./utils.js";
console.log(allUtils);
console.log(allUtils.userNamee);
console.log(allUtils.car);

// is too correct
// let {userNamee,car} = allUtils;
// console.log(userNamee,car);



////////change name of Variable
import { name as namee, color as fan } from "./utils.js";
console.log(namee, fan);

//////export default
import cloths from "./utils.js";
console.log(cloths);
//or
import cccccc from "./utils.js"
console.log(cccccc);


//////////////////////////////////////////////////////////////map()
let scores = [15, 20, 13, 14, 17];
scores.map((score, index) => console.log(index, score));

let doubleScore = scores.map(score => score * 2);
console.log(doubleScore);

/////////////////////////////////////////////////////////////////this

/// this in event listener
let button = document.querySelector('.button1');
button.addEventListener('click', removeListItem);
function removeListItem() {
    console.log('click', this);
}

/// this in functions
function showValuee() {
    console.log(this);
}
showValuee();

function sumNumbers() {
    console.log(arguments);
}
sumNumbers(2, 3, 5);

function sumNumbers2() {
    let sum = 0;
    for (let arg of arguments) {
        sum += arg;
    }
    console.log('this in function:', this);
    return sum
}
console.log('sum:', sumNumbers2(2, 3, 5, 6, 7, 8, 9, 10));

/// this in object
let people = {
    id: 1,
    name: 'ilya',
    age: 10,
    walk: function () {
        console.log('walked');
    },
    showThis: function () {
        console.log(this);
        console.log('this in object:', this);
        console.log('age:', this.age);
    },
    setName: function (newName) {
        this.name = newName;
    },
    setAge: function (newAge) {
        this.age = newAge;
    }
}
people.setAge(20);
people.setName('amir');
people.walk();
people.showThis();
console.log(people);


///////////////////////////////////////////////////////////////   bind
//example 1
const product = {
    id: 1,
    price: 200,
    name: 'bread',
    getPrice: function () {
        console.log(this);
    }
}
product.getPrice();

let productFunc = product.getPrice;
productFunc();

let productFunc2 = product.getPrice.bind(product);
productFunc2();

// //example 2
let producte1 = {
    id: 12,
    price: 100,
    name: 'milk',
}
let producte2 = {
    id: 13,
    price: 150,
    name: 'bread',
}

function showName() {
    console.log('your name is:', this.name);
}

let productName1 = showName.bind(producte1);
let productName2 = showName.bind(producte2);
productName1();
productName2();

////////////////////////////////////////////////  class

//توابع سازنده 
function Car(color, name, model) {
    this.color = color;
    this.name = name;
    this.model = model;
}
let peugeot405 = new Car('red', 'peugeot', '405');
let parsTu5 = new Car('white', 'peugeot pars', 'parsTu5');
console.log(parsTu5);
console.log(peugeot405);

//class instead of توابع سازنده 
class Carr {
    constructor(color, name, model) {
        this.color = color;
        this.name = name;
        this.model = model;
    }
}
let peugeot206 = new Carr('red', 'peugeot', '206');
let renut = new Carr('white', 'renut', 'renut');
console.log(renut);
console.log(peugeot206);

//////////////////////////////////////////////////// extends: ارث بری در کلاسها 
class Carrr {
    constructor(color, name, model) {
        this.color = color;
        this.name = name;
        this.model = model;
    }
    speedRun() {
        console.log(this.name + ' شروع به حرکت کرد ');
    }
}
let peykan = new Carrr('red', 'peykan', '70');
let pride = new Carrr('white', 'kia', '89');
console.log(pride);
console.log(peykan);

class Truck extends Carrr {
    constructor(color, name, model, maxbar) {
        super(color, name, model);
        this.maxbar = maxbar;
    }
    speedRun() {
        console.log('truck', this.name + ' is running');
        super.speedRun();
    }
}

let firstTruck = new Truck('red', 'FH', '99', 1000);
console.log(firstTruck);
firstTruck.speedRun();


/////////////////////////////////////////////////////////// template string 
//example 1
let userName = {
    id: 1,
    name: 'ilya',
    age: 10
}

////راه خوبی نیست
console.log('id: ' + userName.id + '\n name: ' + userName.name + '\n age: ' + userName.age);

////راه خوب و بهتری نسبت به قبلی است 
console.log(`id: ${userName.id} name: ${userName.name} age: ${userName.age}`);
///// در اینجا با کلید اینتر خط های جداگانه تولید میشود 
console.log(`id: ${userName.id} 
name: ${userName.name}
 age: ${userName.age}`);

//example 2
let allPrice = 39000;
let postCost = 6000;
console.log(`price: ${allPrice} post cost: ${postCost} total price: ${allPrice - postCost}`);


//////////////////////////////////////////////////////////   filter
//example 1
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let filterNumbers = numbers.filter(function (number) {
    console.log(number)
    return number > 5
});

console.log(filterNumbers);

//example 2
let allProducts = [
    { id: 1, name: 'laptop', price: 7000000 },
    { id: 2, name: 'phone', price: 5000000 },
    { id: 3, name: 'water', price: 7000 },
    { id: 4, name: 'pencil', price: 19000 },
    { id: 5, name: 'milk', price: 35000 },
];

let filterProducts = allProducts.filter(product => {
    console.log(product);
    return product.price < 1000000;
});

console.log(filterProducts);


//////////////////////////////////////////////////////////   reduce
//example 1
let Numbers = [10, 20, 30, 40, 50];
let reduceNumbers = Numbers.reduce((prev, current) => {
    console.log(prev, current);
    //console.log(prev);
    //console.log(current);
    //console.log('number')
    return prev + current;
});

console.log('sum:' + reduceNumbers);

//example 2
let shoppingCart = [
    { id: 1, name: 'laptop', price: 17000000 },
    { id: 2, name: 'phone', price: 8000000 },
    { id: 3, name: 'water', price: 7000 },
]

let reduceCart = shoppingCart.reduce((prev, current) => {
    console.log(prev, current);
    if (prev.price) {
        return prev.price + current.price;
    }
    return prev + current.price;
});
console.log('sum:' + reduceCart);

///////////////////////////////////////////////////////////////////  falsy & truthy value

let value = 0;
if (value) {
    console.log('value is truthy');
}
else {
    console.log('value is falsy');
}

let isLogin = false;
if (isLogin) {
    console.log('user is login');
}
else {
    console.log('user is not login');
}

let isLogin1 = [];
if (isLogin1.length) {
    console.log('user is login');
}
else {
    console.log('user is not login');
}

///////////////////////////////////////////////////////////////  conditional rendering رندرهای شرطی 

//And (&&)
let num1 = 5;
let num2 = 6;
let num3 = 8;

if (num1 + num2 === 11 && num2 + num3 === 11) {
    console.log('true');
}
else {
    console.log('false');
}

let isLogin2 = true ;
isLogin2 ? console.log('ok') : console.log('not ok');
isLogin2 && console.log('ok');

//Or(||)
let num11 = 5;
let num22 = 6;
let num33 = 8;

if (num11 + num22 === 11 || num22 + num33 === 11) {
    console.log('true');
}
else {
    console.log('false');
}