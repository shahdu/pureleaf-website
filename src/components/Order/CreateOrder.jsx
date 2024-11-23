import React, { useState, useContext } from 'react';
import { createOrder } from '../../Services/OrderService';
import { CartContext } from '../../Context/CartContext';
import { decodeToken } from '../../Utilities/TokenDecode';
import { useNavigate } from 'react-router-dom';

export const CreateOrder = () => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    if (!token) {
        navigate("/signIn");
        return null;
    }
    const decoded = decodeToken(token);
    const userId = decoded?.nameid;

    const { cart, totalAmount, clearCart } = useContext(CartContext);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Prepare the order data
        const orderData = {
            userId,
            totalAmount,
        };

        try {
            const response = await createOrder(orderData);
            console.log("Order created successfully", response.data);
            clearCart(); // Clear cart after successful order creation
        } catch (err) {
            console.error("Error creating order:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <h1 className="text-center mb-16 font-bold text-pink-900">Complete Order</h1>
            <section>
                <h2 className="ml-5 mb-5 underline text-pink-700">Order Products</h2>
                {cart.map((product, index) => (
                    <div key={index} className="flex flex-col justify-around mb-5 small:flex-row">
                        <p className="small:w-[20%]">{product.productName}</p>
                        <img src={product.image} alt={product.title} width={"10%"} />
                        <p>Quantity: {product.quantity}</p>
                        <p>Price: {product.price * product.quantity}</p>
                    </div>
                ))}
                <p className="text-center text-lg underline m-5 text-pink-700">Total price: {totalAmount}</p>
                <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="bg-pink-700 text-white px-4 py-2 rounded"
                >
                    {loading ? "Processing..." : "Place Order"}
                </button>
            </section>
        </>
    );
};
