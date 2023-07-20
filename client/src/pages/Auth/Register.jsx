import React, { useState } from 'react';
import Layout from '../../components/Layout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
axios.defaults.withCredentials = true;

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const [answer, setAnswer] = useState("");
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${import.meta.env.VITE_REACT_APP_API_URL}/api/v1/auth/register`, { name, email, phone, address, password, answer }, { withCredentials: true });
            if (res && res.data.success) {
                await Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: res.data.message,
                    showConfirmButton: true,
                    confirmButtonText: 'Thanks!',
                });
                navigate('/login');
            } else {
                await Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: res.data.message,
                    showConfirmButton: true,
                    confirmButtonText: 'Ok',
                });
            }
        } catch (error) {
            console.log(error);
            await Swal.fire({
                icon: 'error',
                title: 'Something went wrong!',
                text: 'Please try again.',
                showConfirmButton: true,
                confirmButtonText: 'Ok',
            });
        }
    };

    return (
        <Layout title={'Register - Ecommerce'}>
            <div className="register">
                <h1>Register Form</h1>
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
                        <input type="text" className="form-control" id="AnswerInput" placeholder='What is your favorite sports' value={answer} onChange={(e) => setAnswer(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control" id="passwordInput" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-dark">Register</button>
                    </div>
                </form>
            </div>
        </Layout>
    );
};

export default Register;
