// // // function one(){
// // //     return 1;
// // // }

// // // function two(){
// // //     return one() + one();
// // // }

// // // function three(){
// // //     let ans = two() + one();
// // //     console.log(ans);
// // // }

// // // three();

// // setTimeout(() => {
// //     console.log("Vaibhav");
// // }, 2000);
// // setTimeout(() => {
// //     console.log("Gayakwad");
// // }, 2000);

// // console.log("hello...");

// let h1 = document.querySelector("h1");

// setTimeout(() => {
//     h1.style.color = "red";
// }, 1000);

// setTimeout(() => {
//     h1.style.color = "orange";
// }, 2000);

// setTimeout(() => {
//     h1.style.color = "green";
// }, 3000);


// let h1 = document.querySelector("h1");

// function changeColor(color, delay, naxtColorChange){
//     setTimeout(() => {
//         h1.style.color = color;
//         if(naxtColorChange) naxtColorChange();
//     }, delay);
// }

// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("green", 1000, () => {
//             changeColor("blue", 1000);
//         });
//     });
// });

let h1 = document.querySelector("h1");

function changeColor(color, delay){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            console.log(`color changed to ${color}`);
            resolve("color changed");
        }, delay);
    });
}

async function demo(){
    await changeColor("red", 1000);
    await changeColor("orange", 1000);
    await changeColor("yellow", 1000);
    changeColor("blue", 1000);
}

demo();
