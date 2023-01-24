import { useState, useEffect } from "react"
import React from 'react'
import {Link} from 'react-router-dom' 
import { useParams } from "react-router-dom"

const ItemDetail = ({}) => {
  const {item_id}=useParams();
  console.log(item_id);
  const [item, setItem]=useState({});

  useEffect(()=>{
     fetchItem();
  },[]);

 const fetchItem=async()=>{
    const fetchItem=await fetch(`http://localhost:5000/employee/${item_id}`);
    const item=await fetchItem.json();
    console.log(item);
    setItem(item);

 }
  

  return (
    <div>
        <h1>{item.name}</h1>
       
    </div>
  )
}


export default ItemDetail