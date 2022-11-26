import React from 'react';
import "./product.css";

const Product = (props) =>{
    const productData = props.prodData.map((item)=>{
         return (
            <div className='card'>
            <h1>{item.name}</h1>
            <img src={item.img} alt={item.name}/>
            <div>
            <p>{item.description}</p>
            <p>rs.{item.cost}</p>
            <p>{item.uses}</p>
            </div>
            </div>
         )
    })
    return (
        <div className='main'>{productData}</div>
    )
}
export default Product;