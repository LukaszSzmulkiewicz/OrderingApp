import React from 'react';
import Product from './Product';
import Orders from './Orders';

export default function Main(props) {
  // reading products an onAdd from props 
  const {products, onAdd} = props;
  return <main className='block col-2'>
    <h2>Menu</h2>
    
    <div className='row'>
      {products.map((product)=>(
        <Product key={product.id} product={product} onAdd={onAdd}> </Product>
      ))}
    </div>
   
  </main>
       
}
