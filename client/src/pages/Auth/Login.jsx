import React, { useState } from 'react';
import Layout from '../../components/Layout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useAuth } from '../../context/auth';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { auth, setAuth } = useAuth();
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${import.meta.env.VITE_REACT_APP_API_URL}/api/v1/auth/login`, { email, password }, { withCredentials: true });
            if (res && res.data.success) {
                await Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: res.data.message,
                    showConfirmButton: true,
                    confirmButtonText: 'Thanks!',
                });
                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token,
                })
                localStorage.setItem('auth', JSON.stringify(res.data))
                navigate('/');
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
        <Layout title={'Login - Ecommerce'}>
            <div className="register">
                <h1>Login Form</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input type="email" className="form-control" id="emailInput" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control" id="passwordInput" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-dark">Login</button>
                    </div>
                </form>
            </div>
        </Layout>
    );
};

export default Login;