import { palindrome, displayObjArr, filterNewest } from './util.js'

console.log("The palindrome value: " + palindrome('3553'));

let cars = [{ name:'toyota', year: 2018 }, {name:'Acura', year:2021},{name:'Ford', year:2022}];

filterNewest(cars, 2021);

displayObjArr(cars);








