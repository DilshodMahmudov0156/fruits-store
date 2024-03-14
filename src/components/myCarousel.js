import React from 'react';
import Carousel from "react-bootstrap/Carousel";

function MyCarousel({ imgs }) {
    return (
        <div className="container mt-5">
            <Carousel className="my-carousel">
                {
                    imgs.map(item => (
                        <Carousel.Item id={item.id} className="my-carousel">
                            <img src={item.url} alt={`${item.url} not found!`} className="w-100"/>
                            <Carousel.Caption>
                                <h3 className="carousel-text">{item.text}</h3>
                                {/*<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))
                }
            </Carousel>
        </div>
    );
}

export default MyCarousel;