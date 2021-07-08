const mongoose = require('mongoose')
const Schema = mongoose.Schema
const objectId = mongoose.Schema.ObjectId

const OrderSchema = new Schema({
    idUser: {
        type: objectId
    },
    idRental:{
        type: objectId
    },
    namapenyewa: {
        type : String
    },
        alamatpenyewa: {
        type : String
    },   
        hargasewaperjam: {
        type : String
    },

        jenismobil: {
        type : String
    },
    image: {
        type: String
    
    },
    status: {
        type: Number,
        default: 1
    }
})

module.exports = mongoose.model('order', OrderSchema)