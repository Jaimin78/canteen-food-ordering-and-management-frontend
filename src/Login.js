import React from 'react'

const Login = () => {
    return (
        <main className='login-body w-100'>
            <div className="login-container">
                <div className="login-content">
                    <h1 className="welcome-text">Welcome Back</h1>
                    <form className="login-form">
                        <input type="text" placeholder="Email Id" className="input-field" />
                        <input type="password" placeholder="Password" className="input-field" />
                        <button type="submit" className="login-button">Login</button>
                    </form>
                    <span>Don't have an Account? <strong>Register Now</strong></span>
                </div>
            </div>
        </main>
    )
}

export default Login;