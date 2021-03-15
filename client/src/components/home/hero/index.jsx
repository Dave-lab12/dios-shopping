import React from 'react'
import running from '../../../asset/running_shoes.png'
import './style.css'
function Hero() {
    return (
        <section className="hero">
      <div className="hero-content">
        <h1>Shopping is fun</h1>
        <p>Browse out premium product</p>
        <input type="button" value="Browse Now" />
      </div>
      <img src={running} alt="running shoes"  />
    </section>
    )
}

export default Hero
