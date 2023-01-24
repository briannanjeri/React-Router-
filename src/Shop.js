import { useState, useEffect } from "react"
import React from 'react'
import  {Link } from 'react-router-dom'

const Shop = () => {
  const [items, setItems]=useState([]);

  useEffect(()=>{
  fetchItems();

  },[]);


const fetchItems=async()=>{
   const res=await fetch('http://localhost:5000/');
   const data=await res.json()
   console.log(data);
   setItems(data)
}
 
  

  return (
    <div>
   {items.slice(0, 5).map((item, index) => {
  
     return<h1 key={item.id}>
      <Link to= {`/shop/${item.id}`}>{item.name}</Link>
      </h1>;
  
})}
        
    </div>
  )
}

export default Shop