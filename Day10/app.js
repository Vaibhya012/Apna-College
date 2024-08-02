// // function helloFunc(){
// //     console.log("Hello");
// // }

// // helloFunc();

// // function rollDice(){
// //     let rand = Math.floor(Math.random() * 6) +1;
// //     console.log(rand);
// // }

// // rollDice(); 

// function calcAvg(a,b,c){
//     avg = (a+b+c)/3;
//     console.log(avg);
// }

// calcAvg(2,4,5);
// calcAvg(3,6,9);

// function table(num){
//     for(let i=num; i<=num*10; i+=num){
//         console.log(i);
//     }
// }

// table(10);

// function getSum(n){
//     let sum = 0;

//     for(let i=1; i<=n; i++){
//         sum += i;
//     }

//     return sum;
// }

// console.log(getSum(5));

// let str = ["hi","hello","bye","!"];

// function concat(str){
//     let result = "";
//     for(let i=0; i<str.length; i++){
//         result += str[i];

//     }
//     return result;
// }

// console.log(concat(str));


// function multipleGreet(func, count){
//     for(let i=1; i<=count; i++){
//         func();
//     }
// }

// let greet = function(){
//     console.log("Hello");
// }

// multipleGreet(greet, 100);


// function oddOrEvenFactory(request){

//     if(request == "odd"){
//         let odd = function(n){
//             console.log(!(n%2 == 0));
//         }

//         return odd;
//     } else if(request == "even"){
//         let even = function(n){
//             console.log(n%2 == 0);
//         }

//         return even;
//     } else{
//         consol.log("wrong request");
//     }
// }

// let request = "odd";

const calculator = {
    num: 55,
    add: function(a, b){
        return a+b;
    },
    sub: function(a, b){
        return a-b;
    },
    mul: function(a, b){
        return a*b;
    }
};