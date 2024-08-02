// // let inp = document.querySelector("input");

// // inp.addEventListener("keydown", function(event){
// //     console.log(event);
// //     console.log("Key Pressed");
// // });

// // inp.addEventListener("keyup", function(){
// //     console.log("Key Pressed");
// // });

// let form = document.querySelector("form");

// form.addEventListener("submit", function(event){
//    event.preventDefault();
   
//    let user = this.elements[0];  //like form.elements[1];
//    let pass = this.elements[1];
// //    let pass = document.querySelector("#pass");
   
//    console.log(user.value);
//    console.log(pass.value);

//    alert(`Hi ${user.value}, your password is set to ${pass.value}`);
// });

let user = document.querySelector("#user");

user.addEventListener("change", function(){
    console.log("change event");
    console.log("final value = ", this.value);
});

user.addEventListener("input", function(){
    console.log("input event");
    console.log("final value = ", this.value);
});