import express from "express";
const app = express()
// const mw = (req, res, next) => {
//     console.log("this is a middleware")
//     next()
// }

// app.use(mw)

app.use((req, res, next) =>{
    const time = Date.now()
    req.localtime = time
    next()
})

app.use((req, res, next)=>{
    req.num = "100"
    next()
})




app.get("/", (req, res)=>res.send("Home Page" + req.localtime + " "+req.num))

app.listen(80, ()=>console.log("server is currently running on http://127.0.0.1"))