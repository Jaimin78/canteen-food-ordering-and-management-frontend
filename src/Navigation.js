import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Globaldata } from "../src/App";
const Navigation = (props) => {
    const { cart } = useContext(Globaldata);

    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/login')
    }


    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark h-100" style={{ width: "280px" }}>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <svg className="bi pe-none me-2" width="40" height="32"></svg>
                <span className="fs-4">Food Ordering</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <Link as={Link} to='/' className={`nav-link ${props.path === '/' ? 'active' : 'text-white'}`} aria-current="page">
                        <i className="bi bi-house-door me-2"></i>
                        Home
                    </Link>
                </li>
                <li>
                    <Link as={Link} to='/status' href="/" className={`nav-link ${props.path === '/status' ? 'active' : 'text-white'}`}>
                        <i className="bi bi-hourglass-split me-2"></i>
                        Order Status
                    </Link>
                </li>
                <li>
                    <Link as={Link} to='/past' className={`nav-link ${props.path === '/past' ? 'active' : 'text-white'}`} >
                        <i className="bi bi-clock-history me-2"></i>
                        Past Orders
                    </Link>
                </li>
                <li>
                    <Link as={Link} to='/' className="nav-link text-white">
                        <i className="bi bi-send me-2"></i>
                        Contact Us
                    </Link>
                </li>
                <li>
                    <Link as={Link} to='/' className="nav-link text-white">
                        <i className="bi bi-question-diamond-fill me-2"></i>
                        About Us
                    </Link>
                </li>
            </ul>
            <hr />
            <div className="dropdown d-flex justify-content-between">
                <a href="/" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                    <strong>Jaimin Suthar</strong>
                </a>
                <span className="cart-count">{cart.length}</span>
                <Link as={Link} to='/cart'>
                    <i style={{ fontSize: '20px', color: 'white' }} className="bi bi-cart2"></i>
                </Link>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                    <li><a className="dropdown-item" href="/">Profile</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" onClick={logout}>Sign out</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation; 