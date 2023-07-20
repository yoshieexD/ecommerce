import React from 'react';
import Layout from '../../components/Layout';
import AdminMenu from '../../components/AdminMenu';

const Users = () => {
    return (
        <Layout title={'Admin Dashboard: Users List - Ecommerce'}>
            <div className="row">
                <div className="container-fluid m-3 p-3">
                    <div className="col-md-3">
                        <AdminMenu />
                    </div>
                    <div className="col-md-3"></div>
                    All users
                </div>
            </div>
        </Layout>
    );
};

export default Users;