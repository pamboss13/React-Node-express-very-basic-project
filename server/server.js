const express = require('express')
const app = express()

app.get("/api",(req,res)=>{
    res.json({"users": ["Pambos","Teetos","Kimis", "Kotsios"] })
})

app.listen(5000, ()=>{console.log("Server started on port https://localhost:5000/api") })

