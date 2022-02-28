import express from "express";

const app = express()

app.get("/", (req, res)=>{
    throw new Error("server problem")
    res.send("<h1>Home Page</h1>")
})

app.use((erro, req, res, next)=>{
    console.log("server is crashed" + erro.message)
    res.send("Error:" + erro.message)
    next()
})


app.listen(80, ()=> console.log("our server is currently running on http://127.0.0.1"))