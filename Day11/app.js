let names = ["nitin","gaurav","sandip","satish", "vaibhav"];

// let winner = names[0];
// let runnerup = names[1];
// let secondRunner = names[2];

let [winner, runnerup, secondRunner, ...others] = names;


// Destructuring with Object


const student = {
    name: "Nitin",
    age: 19,
    class: 14,
    subject: ["hindi","marathi","english","math"],
    city:"pune",
    username: "nitin012",
    password: "xyz"
};

// let username = student.username;
// let password = student.password;

let { username: user, password: secret, city: place = "mumbai"} = student;