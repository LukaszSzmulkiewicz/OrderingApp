import React from 'react'

export default function Orders(props) {
  //getting orders from props 
  const { orders } = props;
  return (
    <footer>
         <h2>Your Pending Orders</h2>
      <div>{orders.length === 0 && <div>No Pending Orders</div>}</div>
      {orders.map((item) => (<div key={item.id} className="row">
        <div className="column 2">{item.id}</div>
        <div className="column 2 text-right">
           £{item.total.toFixed(2)}
        </div>
      </div>
      ))}
    </footer>
  )
}
