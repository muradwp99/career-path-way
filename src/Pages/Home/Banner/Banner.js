import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner 1.png';
import banner2 from '../../../images/banner 2.png';
import banner3 from '../../../images/banner 3.png';
import "./Banner.css"

const Banner = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block bannerImg"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption className='w-25 m-auto slide-title'>
                    <h2>Life Strategy</h2>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block bannerImg"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption className='w-25 m-auto slide-title'>
                    <h2>LeaderShip</h2>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block bannerImg"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption className='w-25 m-auto slide-title'>
                    <h2>Vision To Goal</h2>

                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;
