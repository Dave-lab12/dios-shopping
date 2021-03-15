
import React from 'react';
import Footer from './components/footer';

import Home from './components/home/Home';
import Nav from './components/navigation/navigation'
import {Route} from 'react-router-dom'
import Shop from './components/shop-page/shop'
// import FileBase from 'react-file-base64'

// import Axios from 'axios';

function App() {
  
  return (
    <>
    <Nav/>
    <Route exact path='/' component={Home}/>
    <Route exact path='/shop' component={Shop}/>
    <Footer/>
    </>
    )

}

export default App;








  // const[fetch,setFetch]=useState([])
  // const [data,setData]= useState({
  //   image:'',
  //   price:'',
  //   description:'',
  //   title:'',
  //   rating:0
  // })
  // const sendData = ()=>{
  //   Axios.post('http://localhost:5000/create',{data})
    
  // }
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
  // return (
//     <div className="App">
//       <input type="number" name="price" value={data.price} onChange={(e)=> setData({...data, price:e.target.value}) }/>
//       <input type="text" name="description" value={data.description} onChange={(e)=> setData({...data, description:e.target.value}) }/>
//       <FileBase 
//         type='file'
//         multiple={false}
//         onDone={({base64})=> setData({ ...data, image:base64 })} 
//         />
//       <input type="text" name="title" value={data.title} onChange={(e)=> setData({...data,title:e.target.value})}/>
//       <input type="number" name="rating" value={data.rating} onChange={e=> setData({...data,rating:e.target.value})}/>
//       <button type='submit' onClick={sendData}>Send data</button>

//       {
//         fetch && fetch.map((data)=>{
//           const {_id,description,image,price,rating,title,time} = data
//           return (<div key={_id}>
//               <h1>{title || null}</h1>
//               <h2>{description || null}</h2>
//               <h3>{price || null}</h3>
//               <h5>{rating || null}</h5>
//               <img src={image || null} alt="s"/>
//               <p>{time}</p>
//               <button onClick={()=> handleDelete(_id)}>Delete</button>
//           </div>)
//         })
//       }


//     </div>
//   );
// }

