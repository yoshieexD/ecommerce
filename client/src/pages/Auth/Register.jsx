import React, { useState } from 'react';
import Layout from '../../components/Layout';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post(`${import.meta.env.VITE_REACT_APP_API_URL}/api/v1/auth/register`, { name, email, phone, address, password })
            if (res.data.success) {
                toast.success(res.data.message);
                navigate('/login');
            }
            else {
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error('Something went wrong');
        }
    };
    return (
        <Layout title={'Register - Ecommerce'}>
            <div className="register">
                <h1>Register Page</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input type="text" className="form-control" id="nameInput" placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <input type="email" className="form-control" id="emailInput" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" id="phoneInput" placeholder='Enter your phone' value={phone} onChange={(e) => setPhone(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" id="addressInput" placeholder='Enter your address' value={address} onChange={(e) => setAddress(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control" id="passwordInput" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </Layout>
    );
};

export default Register;
