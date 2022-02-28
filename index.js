import express from "express"
// import {get, post} from "./router.js"
import router from "./router.js"

const app = express()
// app.use(get)
// app.use(post)
app.use("/api", router)

app.listen(80, ()=>console.log("server is currently running on http://127.0.0.1/"))


