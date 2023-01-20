/* ==== Array Functions =====*/
//function is independent
//Method is dependent save in any object and property

//MAP Method ye predefined function hai jo prototype main define hai


// const arr = [1, 2, 3, 4, 5, 6];

// first perameter main value
// 2nd perameter main value ka index no
// arr.map(function (a, b) {
//     // console.log("value",a)
//     const arr = a * 2;
//     console.log(arr)
// });

// const newArr = arr.map(function (a, b) {
//     return a * 2
// });
// console.log(newArr);
// console.log(arr);

/* ===== HIGHTER order FUNCTIONS =====*/ // wo function jo apne perameter main kisi dusre function ko call karega

/* ===== CALLBACK FUNCTIONS =====*/ // wo function jo  kisi function k perameter main call ho

// function abc(a) {    //HIGHTER order function
//     console.log(a);

// }
// function xyz(x) { //CALLBACK FUNCTIONS
//     return x;
// }

// let a = xyz("kuch bhi")

// abc(xyz("pehle xyz function chalega"))


// function abc(a) {
//     console.log(a);
//     return function (b) {
//         console.log(b);
//     };
// }

// abc("ABC");
// // let returnHoneWalaFunction = abc("ABC");

// // returnHoneWalaFunction("return Wala");

// abc("ABC")('XYZ');

/* ===== ARROW FUNCTIONS =====*/

// let a = function () {
//     console.log("ABC");
// };

// a();

// let b = (a) => {
//     console.log();
// }

// b("ABC");

// let t = () => {
//     return "Save hua";
// };

// console.log(t());

let a = (() => {
    return "Save hua";
})();

console.log(a);

let b = undefined;

let c = (b || 0) * 1 - 10;
console.log(c);

























