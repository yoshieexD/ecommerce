import React from 'react';
import Layout from '../components/Layout';
import { BiMailSend, BiPhoneCall, BiSupport } from 'react-icons/bi';
import contactus from '../assets/contactus.jpg';

const Contact = () => {
    return (
        <Layout>
            <div className='row contactus d-flex justify-content-center align-items-center m-auto'>
                <div className='col-md-6 mt-3'>
                    <img src={contactus} style={{ width: "100%" }} alt="Contact Us" />
                </div>
                <div className='col-md-4'>
                    <h1 className="bg-dark p-2 text-white text-center">Contact US</h1>
                    <p className="text-justify mt-2">
                        any query and info about the product feel free to call anytime we are 24 hours open
                    </p>
                    <p className="mt-3">
                        <BiMailSend /> : www.sample@sample.com
                    </p>
                    <p className='mt-3'>
                        <BiPhoneCall /> : +63-1233-123
                    </p>
                    <p className="mt-3">
                        <BiSupport /> : 1434-23435
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;

