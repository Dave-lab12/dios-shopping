import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

import {createData,getItems,deletePost} from './controllers/items.js'
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors())
app.use(bodyParser.json({limit:'30mb',extended:true}))
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}))

app.post('/create',createData)
app.get('/',getItems)
app.post('/delete',deletePost)


mongoose.connect(process.env.CONNECTION_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    app.listen(PORT,()=>{
    console.log(`Listening on port:${PORT}`)
})
}).catch((error)=> console.log(error.message))
mongoose.set("useFindAndModify",false)
