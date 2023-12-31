import React from 'react';
import Layout from '../../components/Layout';
import { useAuth } from '../../context/auth';
import UserMenu from '../../components/UserMenu';

const Dashboard = () => {
    const { auth } = useAuth()
    return (
        <Layout title={'Dashboard - Ecommerce'}>
            <div className="container-fuild p-3 m-3">
                <div className="row">
                    <div className="col-md-3">
                        <UserMenu />
                    </div>
                    <div className="col-md-9">
                        <div className="card w-75 p3">
                            <h3>User:{auth?.user?.name}</h3>
                            <h3>User Email:{auth?.user?.email}</h3>
                            <h3>User Contact:{auth?.user?.phone}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Dashboard;