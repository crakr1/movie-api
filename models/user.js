const mongoose = require("mongoose")

const modelSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
        maxLength: 50
    },
    email: {
        type: String, 
        required: true,
        unique: true
    },
    password: {
        type: String, 
        required: true,
        minLength: 6
    },
    watchList: [
        {
            movie: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'movie'
            },
            watched: Boolean
        }
    ],
    isAdmin:{
        type: Boolean,
        default: false
    }
    
})

const Model = mongoose.model('User', modelSchema)


module.exports = Model