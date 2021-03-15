import React from 'react'
import './style.css'
function ItemsImage({data}) {
  console.log(data);
    return (
        <section className="items-image">
        <h1 className="s-title">New arrivals</h1>

        <div className="img-container">
          {data && data.map(item =>{
            const {_id  ,image}=item
          return  <img key={_id} src={image} alt="product images" />
          })}
          
        
        </div>
      </section>
    )
}

export default ItemsImage
