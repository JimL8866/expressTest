import express from "express";
const app = express();
import querystring from "querystring"


app.use((req, res, next)=>{

    let str = ""
    req.on("data", (chunk)=> str+=chunk )
    req.on("end", ()=>{

        console.log(str)
        let body = querystring.parse(str)
        console.log(body)
        req.body= body
        next()

    })

 
})

//app.use(express.urlencoded({extended:false}))

app.post("/book", (req, res)=>{
    console.log(req.body)
    res.send(req.body)
})


app.listen(80, ()=>console.log("Servering is currently running on http://127.0.0.1"))