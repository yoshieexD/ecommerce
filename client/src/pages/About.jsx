import React from 'react';
import Layout from '../components/Layout';
import aboutus from '../assets/aboutus.jpg'

const About = () => {
    return (
        <Layout title={'About us - Ecommerce'}>
            <div className='row contactus d-flex justify-content-center align-items-center m-auto'>
                <div className='col-md-6 mt-3'>
                    <img src={aboutus} style={{ width: "100%" }} alt="Contact Us" />
                </div>
                <div className='col-md-4'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim diam vulputate ut pharetra sit amet aliquam. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Nunc vel risus commodo viverra maecenas. Dictum fusce ut placerat orci nulla pellentesque dignissim enim. Ac tortor vitae purus faucibus ornare suspendisse sed nisi. Diam phasellus vestibulum lorem sed risus ultricies tristique. Nunc sed blandit libero volutpat sed. Consequat ac felis donec et odio pellentesque diam volutpat. Sit amet luctus venenatis lectus magna fringilla. Amet facilisis magna etiam tempor. Nec ullamcorper sit amet risus nullam eget felis. Aliquam id diam maecenas ultricies mi eget mauris pharetra. Dictum varius duis at consectetur lorem donec massa sapien.</p>
                </div>
            </div>
        </Layout>
    );
};

export default About;