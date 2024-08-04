const express = require("express");
const app = express();

let port = 3000;

app.listen(port, () => {
    console.log("App is listening on Port");
});

// app.use((req, res) => {
//     console.log("Request received");
//     let code = "<h2>Fruits</h2><ul><li>Apple</li><li>Orange</li></ul>"
//     res.send(code);
// });

app.get("/", (req, res) => {
    res.send("Hello, i am Root");
});

app.get("/:username/:id", (req, res) => {
    let {username, id} = req.params;
    res.send(`WelCome to the page of @${username}.`);
});

app.get("/search", (req, res) => {
    let {q} = req.query;
    if(!q){
        res.send("<h2>Nothing Searched.</h2>");
    }
    res.send(`This are your search result: ${q}`);
})

// app.get("/fruits", (req, res) => {
//     let code = "<h2>Fruits</h2><ul><li>Apple</li><li>Orange</li></ul>";
//     res.send(code);
// });

// app.get("*", (req, res) => {
//     res.send("This path does not exist");
// });

// app.post("/", (req, res) => {
//     res.send("You send Post request to root");
// });


