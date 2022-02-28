// import express from "express";

// const router = express.Router()   

// const get = router.get("/user/list", (req, res)=>{
//     res.send("get user list")
// })

// const post=router.post("/user/add", (req, res)=> res.send("Add new user"))

// export {get, post}

import express from "express";

const router = express.Router()   //create a router obj

router.get("/user/list", (req, res)=>{
    res.send("get user list")
})

router.post("/user/add", (req, res)=> res.send("Add new user"))

// export default router    //export obj 

export default router