const express = require("express");
const usersRoute = require("./route/usersRoutes")
const path = require("path");
const req = require("express/lib/request");


const app =express()

//middlewares
app.use(express.json());

app.use(usersRoute)

//home route
app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname + "/pages/index.html"))
})

app.get("/*", (req, res)=>{
    res.status(404).sendFile(path.join(__dirname + "/pages/404.html"))

})



const PORT = 4000;

app.listen(PORT, ()=>{
    console.log("SERVER IS UP")

})