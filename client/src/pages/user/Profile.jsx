import React from 'react';
import Layout from '../../components/Layout';
import UserMenu from '../../components/UserMenu';

const Profile = () => {
    return (
        <Layout>
            <div className="container-fuild p-3 m-3">
                <div className="row">
                    <div className="col-md-3">
                        <UserMenu />
                    </div>
                    <div className="col-md-9">
                        My Profile
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Profile;