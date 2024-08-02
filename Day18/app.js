function savetoDb(data){
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if(internetSpeed > 4){
            resolve("success : data was saved");
        } else{
            reject("failure : weak connection");
        }
    })
}

savetoDb("apna college")
.then(() => {
    console.log("Data1 saved");
    return savetoDb("helloWorld");
})
.then(() => {
    console.log("Data2 saved");
    return savetoDb("Vaibhav");
})
.then(() => {
    console.log("Data3 saved");
})
.catch(() => {
    console.log("Promise was rejected");
});