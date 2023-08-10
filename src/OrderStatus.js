import React, { useEffect, useState } from 'react';
import Navigation from '../src/Navigation';
import { useLocation } from 'react-router-dom';
const OrderStatus = () => {
    const [orderList, setOrder] = useState()
    const location = useLocation()

    useEffect(() => {
        getOrder()
    }, [])

    //Get Order
    const getOrder = async () => {
        let user = JSON.parse(localStorage.getItem('user'))
        let customerid = user._id
        let response = await fetch('http://localhost:5000/api/item/order/get', {
            method: 'post',
            headers: {
                authorization: JSON.parse(localStorage.getItem('token')),
                customerid: customerid
            }
        })
        let order = await response.json();
        setOrder(order)
    }

    return (
        <>
            <Navigation path={location.pathname} />
            <div className="w-100 overflow-auto">
                <div className="container">
                    <div className="title">Order Status</div>
                    <div className="container mt-4">
                        <table className="table table-dark">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Order Details</th>
                                    <th scope="col">Total</th>
                                    <th scope="col">Order Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orderList && orderList.map((item, i) => (
                                        <tr key={i}>
                                            <th scope="row">{i + 1}</th>
                                            <td>
                                                <table className='table table-dark'>
                                                    <thead>
                                                        <tr>
                                                            <th>Image</th>
                                                            <th>Name</th>
                                                            <th>Category</th>
                                                            <th>Price</th>
                                                            <th>Quentity</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            item.orderDetails.map((detail, i) => (
                                                                <tr key={i}>
                                                                    <td><img src={`http://localhost:5000/uploads/${detail.image}`} width={50} /></td>
                                                                    <td>{detail.name}</td>
                                                                    <td>{detail.category}</td>
                                                                    <td>₹{detail.price}</td>
                                                                    <td>{detail.quantity}</td>
                                                                </tr>
                                                            ))
                                                        }
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td>₹{item.total}</td>
                                            <td><button type="button" class={`btn btn-${item.status == 'Preparing'?'danger':'success'}`}>{item.status}</button></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderStatus;