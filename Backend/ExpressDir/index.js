const express = require("express");
const app = express();

let port=8080;

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});


app.get("/", (req,res) =>{
    res.send("Hello! I am root");
});

app.get("/:username", (req,res) =>{
    console.log(req.params);
    res.send("Hello " + req.params.username);
});

// app.get("/apple", (req,res) =>{
//     res.send("You contacted apple path");
// });

// app.get("/orange", (req,res) =>{
//     res.send("You contacted orange path");
// });


// app.get("/*splat", (req,res) =>{
//     res.send("This path does not exist");
// });

// app.use((req,res) =>{
//     console.log("Request received");
//     res.send("This is a basic response.")
// });
