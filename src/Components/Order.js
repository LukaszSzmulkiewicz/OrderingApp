import React from 'react';

export default function Order(props) {
  const { orderItems, onAdd, onRemove, onConfirmOrder } = props;
  const itemsPrice = orderItems.reduce((accumulator, curetItem) => accumulator + curetItem.price * curetItem.qty, 0)
  const vat = itemsPrice * 0.05;
  const totalPrice = itemsPrice + vat;
  return (
    <aside className="block col-1">
      <h2>Your Order</h2>
      <div>{orderItems.length === 0 && <div>No Orders</div>}</div>
      {orderItems.map((item) => (<div key={item.id} className="row">
        <div className="column 2">{item.name}</div>
        <div className="column 2">
          <button className="button-center" onClick={() => onAdd(item)} className="add">+</button>
          <button onClick={() => onRemove(item)} className="remove">-</button>
        </div>
        <div className="column 2 text-right">
          {item.qty} x £{item.price.toFixed(2)}
        </div>

      </div>
      ))}
      {orderItems.length !== 0 && (
        <>
          <hr></hr>
          <div className="row">
            <div className="col-2">Items Price</div>
            <div className="col-1 text-right">£{itemsPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">VAT 5%</div>
            <div className="col-1 text-right">£{vat.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">
              <strong>Total Price</strong>
            </div>
            <div className="col-1 text-right">
              <strong>£{totalPrice.toFixed(2)}</strong>
            </div>
          </div>
          <hr />
          <div className="row">
            <button onClick={() => onConfirmOrder(totalPrice)}>
              Confirm Order
            </button>
          </div>
        </>
      )}
    </aside>
  );

}
