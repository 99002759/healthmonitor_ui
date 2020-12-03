
const express= require("express");
const app=express();
app.use(express.static("image"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/home.html");
  })
app.get("/home.html", (req, res) => {
    res.sendFile(__dirname + "/home.html");
  })
app.get("/heart.html", (req, res) => {
    res.sendFile(__dirname + "/heart.html");
    })
    
app.get("/bp.html", (req, res) => {
        res.sendFile(__dirname + "/bp.html");
      })
app.get("/bo.html", (req, res) => {
        res.sendFile(__dirname + "/bo.html");
      })
       
app.listen(1239, () => {
    console.log("7");
  })