import express from "express";
const app = express();


app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.post("/user", (req, res)=>{
    console.log(req.body)
    res.send("OK")
})

app.post("/book", (req, res)=>{
    console.log(req.body)
    res.send("OK")
})

app.listen(80, ()=>console.log("Servering is currently running on http://127.0.0.1"))