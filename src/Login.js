import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('token');
        if (auth) {
            navigate('/')
        }
    })

    const login = async () => {
    
        let result = await fetch('http://localhost:5000/api/user/login', {
            method: 'post',
            body: JSON.stringify({email, password}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        if (result.error) {
            alert('User Not Found');
        } else {
            localStorage.setItem('user', JSON.stringify(result.find));
            localStorage.setItem('token', JSON.stringify(result.auth));

            navigate('/');
        }
    }

    return (
        <main className='login-body w-100'>
            <div className="login-container">
                <div className="login-content">
                    <h1 className="welcome-text">Welcome Back</h1>
                    <input type="text" placeholder="Email Id" className="input-field"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input type="password" placeholder="Password" className="input-field"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type="submit" onClick={login} className="login-button">Login</button>
                    <span>Don't have an Account? <strong>Register Now</strong></span>
                </div>
            </div>
        </main>
    )
}

export default Login;