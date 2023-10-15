const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/productModel')
const Category = require('./models/categoryModel')
const app = express()

app.use(express.json({ limit: '50mb' }));


//routes
app.get('/', (req,res)=>{
    try {
        res.json({
          message: "Welcome to dress store application",
        });
      } catch (error) {
        next(error);
      }
})

app.get('/blog', (req,res)=>{
    res.send('Hello blog')
})

app.post('/product', async(req,res)=>{
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message : error.message})
    }
})

app.post('/category', async(req,res)=>{
    try {
        const category = await Category.create(req.body)
        res.status(200).json(category)
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message : error.message})
    }
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