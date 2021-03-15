import React, { useState } from 'react';
import './styles.css'
import {BsSearch} from 'react-icons/bs'
import {AiFillHeart,AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import {Link} from 'react-router-dom'
function Navigation() {
    
    const [click,setClick] = useState(false);

    return (
        <div className="nav-header">
        <nav>
          <h1>DIOS.</h1>
          <AiOutlineMenu onClick={()=> setClick(true)} className='nav-burger' />
          <AiOutlineClose onClick={()=> setClick(false)} className={`t ${click ? 'exit-btn':''}`}/>
          <ul className={`nav-items ${click ? 'tes ':''}`}>
            <li><Link to="/">home </Link></li>
            <li><Link to="/shop">shop </Link></li>
            <li><Link to="/">contact </Link></li>
            <li><Link to="/">login </Link></li>
          </ul>
          <div className="nav-icons">
              <BsSearch className="nav-search" />
              <AiFillHeart className="nav-fav"/>
           
          </div>
        </nav>
      </div>
    )
}

export default Navigation
