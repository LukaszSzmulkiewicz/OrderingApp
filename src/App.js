import React, { useEffect, useState } from "react";
import { Routes, BrowserRouter as Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Order from "./Components/Order";
import Orders from "./Components/Orders";
import data from "./data";
import Footer from "./Components/Footer";

const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]')
const ordersFromLocalStorage = JSON.parse(localStorage.getItem('pendingOrders') || '[]')

export default function App() {
  //products from data
  const { products } = data;

  // hook to implement state 
  const [orderItems, setOrderItems] = useState(cartFromLocalStorage);
  const [orders, setOrders] = useState(ordersFromLocalStorage);
  const [count, setCount] = useState(1);

  //local storage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(orderItems));
  }, [orderItems]);

  useEffect(() => {
    localStorage.setItem("pendingOrders", JSON.stringify(orders));
  }, [orders]);

  // event handlers
  const onAdd = (product) => {
    const exist = orderItems.find((x) => x.id === product.id);
    if (exist) {
      setOrderItems(
        orderItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setOrderItems([...orderItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = orderItems.find(x => x.id === product.id);
    if (exist.qty === 1) {
      setOrderItems(
        orderItems.filter((x) =>
          x.id !== product.id)
      );
    } else {
      setOrderItems(
        orderItems.map(x =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  }
  const onConfirmOrder = (total, count) => {
    setCount([count + 1])
    //const exists = orders.find((x) => x.id === toString(num).id);
    if (orders.lenth) {
      orders.map(x =>
        x.id === orders.id ? { ...orders, id: count, total } : x
      )
      setOrderItems([])
    }
    else {
      setOrders([...orders, { ...orders, id: count, total }])
      setOrderItems([])
    }
  }
  return (
    <>
      <div className="App">
        <Header></Header>
        <div className="row">
          <Main onAdd={onAdd} products={products}> </Main>
          <Order
            onAdd={onAdd}
            onRemove={onRemove}
            onConfirmOrder={onConfirmOrder}
            orderItems={orderItems}
            count={count}

          ></Order>
        </div>
        <Orders orders={orders}></Orders>
      </div>

    </>

  );
  
}
