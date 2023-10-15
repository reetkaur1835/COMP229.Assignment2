const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(express.json)

//routes
app.get('/', (req,res)=>{
    res.send('Hello World')
})

app.get('/blog', (req,res)=>{
    res.send('Hello blog')
})

app.post('/product',(req,res)=>{
    console.log(req.body)
    res.send(req.body)
})

mongoose.connect('mongodb+srv://appuser:hargureet@cluster06.908ay8x.mongodb.net/DressStore?retryWrites=true&w=majority')
.then(()=>{
    console.log('connected to MongoDB')
    app.listen(3000, ()=>{
        console.log("Running on port 3000")
    })
}).catch(()=>{
    console.log(error)
})