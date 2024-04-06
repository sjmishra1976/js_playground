import { palindrome, displayObjArr, filterNewest, arrayMultiply, displayArr, curryFn, add, substract, multiply } from './util.js'

console.log("The palindrome value: " + palindrome('3553'));

let cars = [{ name:'toyota', year: 2018 }, {name:'Acura', year:2021},{name:'Ford', year:2022}];

filterNewest(cars, 2021);

displayObjArr(cars);

const numbers = [4, 9, 16, 25];


let newArr= arrayMultiply(numbers, 25);
displayArr(newArr)

//IEF (Immediately Executable Function and Closures

let myadd = add(5)(6);
console.log('My Add result is:'+myadd);


let resultAdd = curryFn(add,5)(6);
console.log('The curry add funtion result is:'+resultAdd);

let resultSubstract = curryFn(substract,10)(6);
console.log('The curry Substract funtion result is:'+resultSubstract);

let resultMult = curryFn(multiply,5)(6);
console.log('The curry Mult funtion result is:'+resultMult);






