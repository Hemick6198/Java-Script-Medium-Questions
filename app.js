//
//
//          ~ Question - 1 ~
//         
//
//      Falsy or Truthy?
//
//      Given two values, return the first one if it is falsy,
//      otherwise return the second one.
//
//
// function filterOutFalsy(value1, value2) {
//     return !value1 ? value1 : value2;
// }
//
// console.log(filterOutFalsy(null, 5));
//
//
// 
//          ~ Question - 2 ~
//
//      Return the length of any given array
//
//      Given an array, return its length.
//
//
// function arrLength(arr) {
//     return arr.length;
// }
//
// console.log(arrLength([1, 2, 3, 4]));
//
//
// 
//          ~ Question - 3 ~
//
//      Get the last element in an array
//
//      Given an array, return the last element.
//
//
// function lastElement(arr) {
//     return arr[arr.length -1];
// }
//
// console.log(lastElement([3, 2, 0, 6, 'pig']));
//
// 
//
//          ~ Question - 4 ~
//
//      Find the sum of an array
//
//      Given an array, return the sum of every element.
//
//
// function arrSum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; ++i) {
//         sum = sum + arr[i];
//     }
//     return sum;
// }
//
// console.log(arrSum([2, 2, 2]));
//
//
// 
//          ~ Question - 5 ~
//
//      Add up the numbers from a single number
//
//      Given a number, add up all the numbers from one to the number
//      that is given. E.g. An input of 4 will give you 1 + 2 + 3 + 4,
//      which equals 10.
//
//
// function progressiveSum(num) {
//     let sum = 0;
//     for (let i = 1; i <= num; ++i) {
//         sum = sum + i;
//     }
//     return sum;
// }
//
// console.log(progressiveSum(10));
//
// 
//
//          ~ Question - 6 ~
//
//      Calculate the time
//
//      Given a number in seconds, return this number in mm:ss format.
//
//
// function calcTime(seconds) {
//     let timerMinutes = Math.floor(seconds / 60);
//     let timerSeconds = seconds % 60;
//
//     if (timerMinutes.toString().length === 1) {
//         timerMinutes = '0' + timerMinutes;
//     }
//     if (timerSeconds.toString().length <= 1) {
//         timerSeconds = '0' + timerSeconds;
//     }
//     return timerMinutes + ':' + timerSeconds;
// }
//
// console.log(calcTime(608));
//
//
// 
//          ~ Question - 7 ~
//
//      Find the largest number
//
//      Given an array of numbers, return the largest number
//      of that array.
//
//
// function getMax(arr) {
//     let maxNumber = arr[0];
//     for (let i = 1; i < arr.length; ++i) {
//         if (arr[i] > maxNumber) {
//             maxNumber = arr[i];
//         }
//     }
//     return maxNumber;
// }
//
// console.log(getMax([-100, -200, -300]));
//
//
// 
//          ~ Question - 8 ~
//
//      Reverse a string
//
//      Given a string, return the reversed string.
//
//
// function reverseString(str) {
//   let reversedString = "";
//   for (let i = 0; i < str.length; ++i) {
//     reversedString = str[i] + reversedString;
//   }
//   return reversedString;
// }
// 
// console.log(reverseString("abc"));
// 
// or
// 
// function reverseString(str) {
//   let reversedString = "";
//   for (let i = str.length - 1; i >= 0; --i) {
//     reversedString += str[i]
//   }
//   return reversedString;
// }
// 
// console.log(reverseString("abc"));
// 
// or
// 
// function reverseString(str) {
//     return str.split('').reverse().join('');
// }
// 
// console.log(reverseString('Ethan'));
// 
// 
// 
//          ~ Question - 9 ~
// 
//      Turn every element in an array into 0
// 
//      Given an array of elements, retrn the same length
//      array filled with 0's.
// 
// 
// function convertToZeros(arr) {
//     for (let i = 0; i < arr.length; ++i) {
//         arr[i] = arr[i] - arr[i];
//     }
//     return arr
// }
// 
// console.log(convertToZeros([1, 2, 3, 4, 5]))
// 
// or
// 
// function convertToZeros(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; ++i) {
//         newArr[i] = 0;
//     }
//     return newArr;
// }
// 
// console.log(convertToZeros([1, 2, 3, 4, 5]));
// 
// or
// 
// function convertToZeros(arr) {
//     return new Array(arr.length).fill(0);
// }
// 
// console.log(convertToZeros([1, 2, 3]));
// 
// or
// 
// function convertToZeros(arr) {
//     return arr.map(elem =>  0);
// }
// 
// console.log(convertToZeros([1, 2, 3]))
// 
// 
//          ~ Question - 10 ~
// 
//      Given an array of fruits, if it is an apple remove
//      it from the array.
// 
// 
// function removeApples(arr) {
//     let noApples = [];
//     for (let i = 0; i < arr.length; ++i) {
//         if (arr[i] !== 'Apple') {
//             noApples.push(arr[i]);
//         }
//     }
//     return noApples;
// }
// 
// console.log(removeApples(['Banana', 'Apple', 'Orange', 'Apple']))
// 
// or
//
// function removeApples(arr) {
//     return arr.filter(elem => elem !== 'Apple')
// }
// 
// console.log(removeApples(['Banana', 'Apple', 'Orange', 'Apple']))
// 
//
//          ~ Question - 11 ~
// 
//      Filter out all the flasy values
// 
//      Given an array of values, filter out all the falsy values
//      and only return the truthy values.
// 
// 
// function filterOutFalsy(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; ++i) {
//         if (!!arr[i] === true) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }
// 
// console.log(filterOutFalsy(["Banana", [], 0, null, "0"]))
// 
// or
// 
// 
// function filterOutFalsy(arr) {
//     return arr.filter(elem => !!elem === true)
// }
// 
// console.log(filterOutFalsy(["Banana", [], 0, null, "0"]))
// 
// 
//          ~ Question - 12 ~
// 
//      Truthy to true, Falsy to false
//      Given an array of truthy and falsy values, return the same
//      array of elements into its boolean value.
// 
// 
// function convertToBoolean(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; ++i) {  
//         newArr[i] = arr[i] ? 'true' : 'false'
//     }
//     return newArr;
// }
// 
// console.log(convertToBoolean([500, 0, "Ethan", "", []]))
// 
// or
// 
// function convertToBoolean(arr) {
//     return arr.map(elem => !!elem);
// }
//
// console.log(convertToBoolean([500, 0, "Ethan", "", []]))
// 
// 