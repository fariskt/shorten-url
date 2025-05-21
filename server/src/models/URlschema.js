import mongoose from 'mongoose'

const URLschema = new mongoose.Schema({
    shortenURL : {type: String},
    longURL : {type:String},
    createdAt: {type:Date, default: Date.now()}
})

const URLs =  mongoose.model("URLs", URLschema)
export default URLs