import express from "express";

const app = express();

const mw1 = (req, res, next) =>{
   console.log("this is the middleware") 
   next()
}

const mw2 = (req, res, next) =>{
    console.log("hahaha")
    next()
}

app.get("/", mw1, mw2, (req, res)=>{
    res.send("<h1>Home Page</h1>")
})


app.listen(80, ()=>console.log("server is currently running on http://127.0.0.1"))