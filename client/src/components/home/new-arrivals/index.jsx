import React from 'react'
import Axios from 'axios'
import './style.css'
import {useHistory} from 'react-router-dom'


function NewArrivals({data}) {
const isLoggedIn =true
const history = useHistory()
// useEffect(()=>{
 
// },[])
const handleDelete =(id)=>{
     Axios.post('http://localhost:5000/delete',{id})
     history.go('/')
  }

    return (
        <section className="new-arrivals">
      <h1 className="s-title">New arrivals</h1>
      <div className="new-arrivals-image">
        {data && data.slice(0,6).map(item =>{
          const {_id,image,title,price} = item
          return <div className="new-arrivals-card" key={_id}>
              <img
            className="img-h"
            src={image}
            alt={title}         
             />
          <h3>{title}</h3>
          <p>{price}$</p>
          {isLoggedIn?  <button onClick={()=> handleDelete(_id)}> Delete</button>:''}
         
          </div>
        })}
      </div>
    </section>
    )
}

export default NewArrivals
