import mongoose from 'mongoose'
const itemSchema = mongoose.Schema({
    title:String,
    description:String,
    time : { type : Date, default: Date.now },
    gender:String,
    image:String,
    category: String,
    price:Number,
    popular:String
})

const itemData = mongoose.model("itemData",itemSchema)
export default itemData