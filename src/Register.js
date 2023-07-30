import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
          navigate('/')
        }
      })

    const register = async () => {
        let result = await fetch('http://localhost:5000/api/user/register', {
            method: 'post',
            body: JSON.stringify({ name, email, mobile, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        let response = await result.json();
        localStorage.setItem('user', JSON.stringify(response.save));
        localStorage.setItem('token', JSON.stringify(response.auth));
        if (response) {
            navigate('/');
        }
    }

    return (
        <main className='login-body w-100'>
            <div className="login-container">
                <div className="login-content">
                    <h1 className="welcome-text">Register Now</h1>
                    <input type="text" placeholder="Name" className="input-field"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input type="text" placeholder="Email Id" className="input-field"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input type="number" placeholder="Mobile Number" className="input-field"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                    />
                    <input type="password" placeholder="Password" className="input-field"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type="submit" onClick={register} className="login-button">Register</button>
                    <span>Already have an Account? <strong>Login Now</strong></span>
                </div>
            </div>
        </main>
    )
}

export default Register;