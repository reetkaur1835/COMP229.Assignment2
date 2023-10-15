const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, "Please enter a product name"]
        },
        description: {
            type: String,
            required: true,
        },
        price:{
            type: Number,
            required: true,
        },
        published: {
            type: Boolean,
            required: true,
        },
        category: {
            type: String,
            required: true,
        }
    }
)

const Product = mongoose.model("Product", productSchema);

module.exports = Product


