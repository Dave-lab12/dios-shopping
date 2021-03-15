import mongoose from 'mongoose'
import itemData from '../models/itemData.js'
export const getItems = async (req,res) =>{
    try{
        const ItemData = await itemData.find();
        res.status(200).json(ItemData)
    }catch(error){
        res.status(404).json({message:error.message})
    }
}
export const createData = async(req,res)=>{
    const {title,description,image,price,gender,popular} = req.body.data
    const newData = new itemData({title,description,image,price,gender,popular})
   
    
    try{
        await newData.save();
        res.status(201).json(newData)
    }catch (error){
            res.status(409).json({message:error.message})
    }
}
export const deletePost = async (req, res) => {
    const { id } = req.body;
   
     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No data with id: ${id}`);

     await itemData.findByIdAndRemove(id);

    res.json({ message: "item deleted successfully." });
}