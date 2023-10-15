const express = require('express')
const app = express()

//routes
app.get('/', (req,res)=>{
    res.send('Hello World')
})

app.get('/blog', (req,res)=>{
    res.send('Hello blog')
})

app.listen(3000, ()=>{
    console.log("Running on port 3000")
})

