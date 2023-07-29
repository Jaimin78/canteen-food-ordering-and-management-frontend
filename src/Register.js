import React from "react";

const Register = () => {
    return(
        <main className='login-body w-100'>
            <div className="login-container">
                <div className="login-content">
                    <h1 className="welcome-text">Register Now</h1>
                    <form className="login-form">
                        <input type="text" placeholder="Name" className="input-field" />
                        <input type="text" placeholder="Email Id" className="input-field" />
                        <input type="password" placeholder="Password" className="input-field" />
                        <button type="submit" className="login-button">Register</button>
                    </form>
                    <span>Already have an Account? <strong>Login Now</strong></span>
                </div>
            </div>
        </main>
    )
}

export default Register;