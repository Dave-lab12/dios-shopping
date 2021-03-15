import React,{useState} from 'react'
import './style.css'
import FileBase from 'react-file-base64'
import Axios from 'axios'
import {useHistory} from 'react-router-dom'

function AddItem() {
const history = useHistory()
    
    const [data,setData]= useState({
      image:'',
      price:'',
      description:'',
      title:'',
      gender:'Male',
      category:'',
      popular:'false'
    })
    const sendData = ()=>{
        if(data.image && data.price  && data.description  &&  data.title &&  data.gender && data.category){
            Axios.post('http://localhost:5000/create',{data})
            console.log(data);
            // history.go('/')
                
    }else{
        console.log('please fill all the form')
    }
    }
    // const getData = async ()=>{
    //  const data = await Axios.get('http://localhost:5000/')
    //  setFetch(data.data)
    // }
    // const handleDelete =(id)=>{
    //    Axios.post('http://localhost:5000/delete',{id})
      
    // }
    // useEffect(()=>{
    //     getData()
    // },[])


    return (
        <div className="add-items">
        <h1>Add a new product</h1>
       <input type="text" name="title" value={data.title} onChange={(e)=> setData({...data,title:e.target.value})}placeholder="title" />
       <input type="text" name="description" value={data.description} onChange={(e)=> setData({...data, description:e.target.value}) }placeholder="description" />
        <input type="number" name="price" value={data.price} onChange={(e)=> setData({...data, price:e.target.value}) } placeholder="price" />
        <input type="text" name="category" value={data.category} onChange={(e)=> setData({...data, category:e.target.value}) } placeholder="catagories" />
      <FileBase 
         type='file'
        multiple={false}
        onDone={({base64})=> setData({ ...data, image:base64 })} 
        />
      <select name="Gender" value={data.gender} id="" onChange={(e)=> setData({...data,gender:e.target.value})} >
          <option value='male' defaultValue="selected">Male</option>
          <option value='female'>female</option>
          <option value='other'>other</option>
      </select>
      <select name="popular" value={data.popular} id="" onChange={(e)=> setData({...data,popular:e.target.value})} >
          <option value='true' defaultValue="selected">true</option>
          <option value='false'>false</option>
      </select>
       <input type='submit' onClick={sendData} value='Send data' />
      </div>
    )
}

export default AddItem
