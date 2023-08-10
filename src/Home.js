import React, {useEffect, useState, useContext } from "react";
import Navigation from "../src/Navigation";
import { Globaldata } from '../src/App';
import './App.css';
import { useLocation } from "react-router-dom";

const Home = () => {
    const {cart, setCart} = useContext(Globaldata);
    const [items, setItems] = useState([]);

    const location = useLocation()

    useEffect(() => {
        getItem();
    }, []);

    // Get Food Item
    const getItem = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/item/get', {
                method: 'get',
                headers: {
                    authorization: JSON.parse(localStorage.getItem('token'))
                }
            });

            if (response.ok) {
                const data = await response.json();
                setItems(data.data);
            } else {
                console.error('Failed to fetch items');
            }
        } catch (error) {
            console.error('Error fetching items:', error);
        }
    };

    const addToCart = (item) => {
       // updateCart(prevCart => [...prevCart, item]);
        //updateCart(item); // Call the updateCart function to send cart data to App.js
        setCart([...cart, item])
    }

    return (
        <>
                <Navigation path={location.pathname} />
                <div className="w-100 overflow-auto">
                    <div className="container">
                        <div className="title">Menu</div>
                        <div className="container food-group">
                            {items && items.map((food, i) => (
                                <div key={i} className="food-card">
                                    <div className="food-img">
                                        <img src={`http://localhost:5000/uploads/${food.image}`} alt="Img" />
                                    </div>
                                    <div className="food-details">
                                        <span className="food-title">{food.name}</span> <br />
                                        <span className="food-category">{food.category}</span> <br />
                                        <hr />
                                        <div className="food-order">
                                            <span className="food-price">{`${food.price}₹`}</span>
                                            <button className="food-cart" onClick={() => addToCart(food)}>Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
        </>
    );
};

export default Home;
