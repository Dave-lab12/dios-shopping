import React,{useState,useEffect} from 'react'
import  Axios from 'axios'
import {Link, useHistory } from 'react-router-dom'
import { AiTwotoneDelete,AiTwotoneEdit} from 'react-icons/ai'
import AddItem from '../../add-item/add-item'
import { deleteItem } from '../../../api/api'

function Product({match}) {
    const[fetch,setFetch]=useState([])
const[user]=useState(JSON.parse(localStorage.getItem('profile')))

const[update,setUpdate]=useState({
  show:false,
  id:'',
  price:"",
  description:'',
  title:'',
  gender:'Male',
  category:'shoe',
  popular:'false'
})
const history = useHistory()

    const getData = async ()=>{
     const data = await Axios.get('http://localhost:5000/')
     setFetch(data.data)
    }
    const handleDelete =(id)=>{
      deleteItem({id})
       history.go('/')
    }
    const closeUpdate=()=>{
      setUpdate({...update , show:false})
    }
    
      useEffect(()=>{
        getData()
    },[])
   console.log(match);
    let filteredItems = fetch.filter(item => item.category === match.params.items);
console.log(filteredItems);
    return (
        <section className="new-arrivals">
         
      {
        update.show &&  
      <AddItem closeUpdate={closeUpdate} setUpdate={setUpdate} items={update} />
     }
        <h1 className="s-title">{match.params.item}</h1>
        <div className="new-arrivals-image">
          {filteredItems && filteredItems.slice(0).slice(-4).reverse().map(item =>{
            const {_id,image,title,price,category,gender,popular,description} = item
            return <div className="new-arrivals-card" key={_id}>
              <Link to={`/category/${match.params.items}/${_id}`}>
                <img
              className="img-h"
              src={image.image_url}
              alt={title}         
              />
            <h3>{title}</h3>
            <p>{price}$</p>
              </Link>
              {user &&  <AiTwotoneDelete onClick={()=> handleDelete(_id)} /> }
          {user &&  <AiTwotoneEdit onClick={()=> setUpdate({show:true,id:_id,price,title,category,gender,popular,description})} />}

           
            </div>
          })}
        </div>
      </section>
    )
}

export default Product
