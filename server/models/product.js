const moongose = require('mongoose') ;

const ProductSchema = moongose.Schema({
    title: String,
    desciption: String,
    price: Number,
    model: String,
    offer: Boolean,
    discount: Number,
    image: String,
    outstanding: Boolean,
    favorite: Boolean,
}) ;

module.exports = moongose.model('product', ProductSchema) ;