import React from 'react'
import './style.css'
function Button({type,name,value,handleChange}) {

    return (
        <div className="container1">
        <div className="group" >      
         <input className="input" type={type} name={name} onChange={handleChange} required />
        <span className="highlight"></span>
        <span className="bar"></span>
        <label className="label">{value}</label>
        </div>
        </div>
    )
}

export default Button
