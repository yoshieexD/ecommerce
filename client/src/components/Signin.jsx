import React from 'react';
import '../css/Signin.css'

const Signin = () => {
    return (
        <div className='container'>
            <form>
                <div className="form-floating">
                    <input type="email" className="form-control form-control-lg" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <br />
                <div className="form-floating mb-3">
                    <input type="password" className="form-control form-control-lg" id="floatingPassword" placeholder="Password" />
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <button type="submit" className="btn btn-primary btn-lg btn-block">Login</button>
            </form>
        </div>
    );
};

export default Signin;
