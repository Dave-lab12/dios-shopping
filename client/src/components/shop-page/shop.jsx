import React,{useEffect,useState} from 'react'
import Axios from 'axios'

// import Hero from './hero/index'
// import ItemsImage from './items-image'
// import NewArrivals from './new-arrivals'
// import Popular from './popular'


function Shop() {
    const[fetch,setFetch]=useState([])
    const getData = async ()=>{
     const data = await Axios.get('http://localhost:5000/')
     setFetch(data.data)
    }
      useEffect(()=>{
        getData()
    },[])
    return (
        <div>
            {/* <Hero/>
            <NewArrivals data={fetch}/>
            <ItemsImage data={fetch}/>
            <Popular data={fetch}/> */}
            <h1>shop page</h1>
        </div>
    )
}

export default Shop
