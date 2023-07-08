import React from 'react';
import '../css/index.css'
const Index = () => {
    return (
        <div className="login-container">
            <h2>Login</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" placeholder="Enter your email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" placeholder="Enter your password" />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Index;
