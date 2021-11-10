import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://pictures.topspeed.com/IMG/crop/201909/the-bugatti-chiron-h-21_800x0w.jpg"
                alt=""
                />
                <Carousel.Caption>
                <h3>Cars Bazar.com</h3>
                <p>We have your favorite car which you can buy</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://cdn.luxe.digital/media/2020/12/15110747/fastest-cars-world-2021-luxe-digital%402x.jpg"
                alt=""
                />

                <Carousel.Caption>
                <h3>Cars Bazar</h3>
                <p>We have your favorite car which you can buy</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://cdn.luxe.digital/media/2020/12/15110725/fastest-cars-world-2021-Hennessey-Venom-F5-luxe-digital%402x.jpg"
                alt=""
                />

                <Carousel.Caption>
                <h3>Cars Bazar</h3>
                <p>We have your favorite car which you can buy</p>
                </Carousel.Caption>
            </Carousel.Item>
     </Carousel>
    );
};

export default Banner;