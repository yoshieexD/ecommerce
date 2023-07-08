import React from 'react';

const Signin = () => {
    return (
        <>
            <br />
            <div className='container' style={{ maxWidth: '400px' }}>
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
                    <div className="d-grid gap-2">
                        <button className="btn btn-primary pb-3 fs-5" type="button">Button</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Signin;
