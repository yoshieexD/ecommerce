import React from 'react';
import Layout from '../../components/Layout';
import AdminMenu from '../../components/AdminMenu';

const CreateProduct = () => {
    return (
        <Layout title={'Admin Dashboard: Users List - Ecommerce'}>
            <div className="row">
                <div className="container-fluid m-3 p-3">
                    <div className="col-md-3">
                        <AdminMenu />
                    </div>
                    <div className="col-md-3"></div>
                    Create Product
                </div>
            </div>
        </Layout>
    );
};

export default CreateProduct;