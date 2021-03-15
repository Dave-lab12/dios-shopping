import React from 'react'
import img from '../../../asset/Rectangle14.png'
import AddItem from '../../add-item/add-item'
import './style.css'
function Popular({fetch}) {
    return (
        <section className="popular-items">
          <AddItem/>
        <h1 className="s-title">Popular-items</h1>
        <div className="popular-item-container">
          <div className="popular-item-card">
            <img
              className="img-h"
              src={img}
              alt="popular items"
            />
  
            <h3>lorem ipsum</h3>
            <p>$50</p>
          </div>
          <div className="popular-item-card">
            <img
              className="img-h"
              src={img}
              alt="popular items"
            />
  
            <h3>lorem ipsum</h3>
            <p>$50</p>
          </div>
          <div className="popular-item-card">
            <img
              className="img-h"
              src={img}
              alt="popular items"
            />
  
            <h3>lorem ipsum</h3>
            <p>$50</p>
          </div>
          <div className="popular-item-card">
            <img
              className="img-h"
              src={img}
              alt="popular items"
            />
  
            <h3>lorem ipsum</h3>
            <p>$50</p>
          </div>
          <div className="popular-item-card">
            <img
              className="img-h"
              src={img}
              alt="popular items"
            />
  
            <h3>lorem ipsum</h3>
            <p>$50</p>
          </div>
          <div className="popular-item-card">
            <img
              className="img-h"
              src={img}
              alt="popular items"
            />
  
            <h3>lore ipsum</h3>
            <p>$50</p>
          </div>
        </div>
      </section>
    )
}

export default Popular
