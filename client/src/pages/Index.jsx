import React from 'react';
import Carousel from '../components/Carousel';
import Navbar from '../components/Navbar';
import '../global.css'
import { FaShieldAlt, FaUndo, FaTruck, FaSmile } from 'react-icons/fa';

const Index = () => {

    return (
        <div >
            <Navbar />
            <br />
            <div style={{ width: "100%", maxWidth: "950px", margin: "0 auto" }}>
                <Carousel />
                <div className="d-flex justify-content-center justify-content-between">
                    <div className="card shadow-sm p-3 mb-5 bg-body-tertiary rounded" style={{ width: "25%", height: "100px" }}>
                        <div className="card-body d-flex">
                            <FaShieldAlt className="fs-1" />
                            <h5 style={{ marginLeft: "5px" }}>Safe payment</h5>
                        </div>
                    </div>
                    <div className="card shadow-sm p-3 mb-5 bg-body-tertiary rounded" style={{ width: "25%", height: "100px" }}>
                        <div className="card-body d-flex">
                            <FaTruck className="fs-1" />
                            <h5 style={{ marginLeft: "5px" }}>Free delivery</h5>
                        </div>
                    </div>
                    <div className="card shadow-sm p-3 mb-5 bg-body-tertiary rounded" style={{ width: "25%", height: "100px" }}>
                        <div className="card-body d-flex">
                            <FaSmile className="fs-1" />
                            <h5 style={{ marginLeft: "5px" }}>Satisfied</h5>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center fs-3">Shop by categories</div>
            </div>
        </div>
    );
};

export default Index;
