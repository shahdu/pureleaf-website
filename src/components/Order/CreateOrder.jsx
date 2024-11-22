import React, { useState, useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { createOrder } from '../../Service/OrderService';


export const CreateOrder = () => {
    
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/signIn");
      return null;
    }
    const decoded = decodeToken(token);
    const userId = decoded?.nameid;  const { userCart, totalAmount, ClearCart } = useContext(CartContext);

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [cardNumber, setCardNumber] = useState(0);
  const [cardName, setCardName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const orderData = {
      userId,
      totalAmount
    };

    try {
      const response = await createOrder(orderData);
      console.log("Order created successfully", response.data);
      ClearCart()
      setAddress("")
      setCity("")
      setCardName("")
      setCardNumber(0)
    } catch (err) {
      console.error("Error creating order:", err);
    } finally {
      setLoading(false);
    }
  }
  
  return (
    <>
      <h1 className="text-center mb-16 font-bold text-pink-900">
        Complete Order
      </h1>
      <section>
        <h2 className="ml-5 mb-5 underline text-pink-700">Order Products</h2>
        {userCart.map((product, index) => (
          <div
            key={index}
            className="flex flex-col justify-around mb-5 small:flex-row"
          >
            <p className="small:w-[20%]">{product.productName}</p>
            <img src={product.image} alt={product.title} width={"10%"} />
            <p>Quantity: {product.quantity}</p>
            <p>Price: {product.price * product.quantity}</p>
          </div>
        ))}
        <p className="text-center text-lg underline m-5 text-pink-700">
          Total price: {totalAmount}
        </p>
      </section>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-5 my-16"
      >
        <div>
          <label>City: </label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="enter city"
            className="mr-16 p-1 border-b-pink-400 border"
            required
          />

          <label>Address: </label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="enter address"
            className="p-1 border-b-pink-400 border"
            required
          />
        </div>
        <div>
          <label>Card Number: </label>
          <input
            type="number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="enter card number"
            className="mr-9 p-1 border-b-pink-400 border"
            required
          />

          <label>Card Name: </label>
          <input
            type="text"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            placeholder="enter card holder name"
            className="p-1 border-b-pink-400 border"
            required
          />
        </div>

        <div>
          <button
            type="submit"
            disabled={loading}
            className="border-2 border-pink-900 bg-pink-900 text-white rounded-full px-5 mt-9"
          >
            {loading ? "Creating Order..." : "Confirm Order"}
          </button>
        </div>
      </form>
    </>
  );
};