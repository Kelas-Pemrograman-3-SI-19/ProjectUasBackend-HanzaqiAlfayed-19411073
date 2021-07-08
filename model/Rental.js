const mongoose = require('mongoose')
const Schema = mongoose.Schema

const rentalSchema = new Schema({
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
    }
})

module.exports = mongoose.model('rental', rentalSchema)