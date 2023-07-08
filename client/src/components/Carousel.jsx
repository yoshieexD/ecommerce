import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from '../components/Navbar';
import apple from '../assets/apple.jpg';
import camera from '../assets/camera.jpg';
import vape from '../assets/vape.jpg';


const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div style={{ width: "100%", maxWidth: "950px", margin: "0 auto" }}>
            <Slider {...settings}>
                <div>
                    <img src={apple} alt="Apple" style={{ width: "100%", height: "400px" }} />
                </div>
                <div>
                    <img src={camera} alt="Camera" style={{ width: "100%", height: "400px" }} />
                </div>
                <div>
                    <img src={vape} alt="Vape" style={{ width: "100%", height: "400px" }} />
                </div>
            </Slider>
        </div>
    );
};

export default Carousel;