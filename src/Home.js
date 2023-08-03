import React from "react";
import Navigation from "../src/Navigation";
import './App.css'
const Home = () => {
    return (
        <>
            <Navigation />
            <div className="w-100">
                <div className="container">
                    <div className="title">Menu</div>
                    
                    <div className="food-group">
                        <div className="food-card">
                            <div className="food-img">
                          
                            </div>
                            <div  className="food-details">
                                item name, veg/nonveg
                                category,
                                description,
                                price, add to carts
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;