import React from 'react';
import '../global.css';
import Layout from '../components/Layout.jsx';
import { useAuth } from '../context/auth';

const Index = () => {
    const { auth, setAuth } = useAuth();

    return (
        <Layout title={'Home - Ecommerce'}>
            <h1>asds</h1>
            <pre>{JSON.stringify(auth, null, 4)}</pre>
        </Layout>
    );
};

export default Index;
