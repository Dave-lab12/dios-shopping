import mongoose from 'mongoose'
const itemSchema = mongoose.Schema({
    title:String,
    description:String,
    phoneNumber :Number,
    gender:String,
    image:{
        public_id:String,
        image_url:String
    },
    category: String,
    price:Number,
    popular:String
},{timestamps:true})
const categorySchema = mongoose.Schema({
    type:{type:String,unique: true},
    time : { type : Date, default: Date.now },
})
const itemData = mongoose.model("itemData",itemSchema)
export const categoryData = mongoose.model("itemCategory",categorySchema)
export default itemData