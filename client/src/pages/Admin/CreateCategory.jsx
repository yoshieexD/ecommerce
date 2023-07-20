import React from 'react';
import Layout from '../../components/Layout';
import AdminMenu from '../../components/AdminMenu';

const CreateCategory = () => {
    return (
        <Layout title={'Admin Dashboard: Create Category - Ecommerce'}>
            <div className="row">
                <div className="container-fluid m-3 p-3">
                    <div className="col-md-3">
                        <AdminMenu />
                    </div>
                    <div className="col-md-3"></div>
                    Create Category
                </div>
            </div>
        </Layout>
    );
};

export default CreateCategory;