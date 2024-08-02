// // // let n = prompt("Enter your number");
// // // n = parseInt(n);
// // // for(let i=n; i <=(n*10); i=i+n){
// // //     console.log(i);
// // // }


// // const fevMovie = "KGF";
// // let guess = prompt("Gusse the Fav movie");
// // while(guess != fevMovie && guess != "quit"){
// //     guess = prompt("wrong, please try again");
// // }

// // if(guess == favMovie){
// //     console.log("Congrats!");
// // } else {
// //     console.log("You quit");
// // }

// let heroes = [
//     ["ironman","spiderman","thor"],
//     ["superman","wonder woman","flash"]
// ];

// for(let i=0; i<heroes.length; i++){
//     console.log(i, heroes[i], heroes[i].length);
//     for(let j=0; j<heroes[i].length; j++){
//         console.log(`j=${j}, ${heroes[i][j]}`);
//     }
// }

// let student = [["aman",95], ["shradha", 94.5], ["nitin", 86]];

// for(let i=0; i<student.length; i++){
//     console.log(`info of studend #${i+1}`);
//     for(let j=0; j<student[i].length; j++){
//         console.log(student[i][j]);
//     }
// }

// let fruits = ["mango","banana","apple","orange"];

// for(fruit of fruits){
//     console.log(fruit);
// }

// for(char of "VAIBHAV"){
//     console.log(char);
// }

let heroes = [ ["ironman","spiderman","thor"],["superman","wonder woman","flash"] ];

for(list of heroes){
    for(names of list){
        console.log(names);
    }
}