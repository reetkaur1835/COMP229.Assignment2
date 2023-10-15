const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    {
        name:{
            type: String
        },
        description: {
            type: String
        },
        price:{
            type: Number
        },
        published: {
            type: Boolean
        },
        category: {
            type: String
        }
    }
)

const Product = mongoose.model("Product", productSchema);

module.exports = Product


