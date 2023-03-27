import React from 'react'
import Slider from 'react-slick'
import { Button, Card } from 'react-bootstrap'
import image1 from '../../assets/images/sliderImages/image1.avif'
import image2 from '../../assets/images/sliderImages/image2.avif'
import image3 from '../../assets/images/sliderImages/image3.avif'
import image4 from '../../assets/images/sliderImages/image4.avif'
import image5 from '../../assets/images/sliderImages/image5.avif'
const index = () => {
    const UUU = [
        { title: 'slide1', path: image1, desc: 'ddddddd' },
        { title: 'slide2', path: image2, desc: 'ddddddd' },
        { title: 'slide3', path: image3, desc: 'ddddddd' },
        { title: 'slide4', path: image4, desc: 'ddddddd' },
        { title: 'slide5', path: image5, desc: 'ddddddd' }
    ]

    var settings = {
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    }
    return (
        <>
            <div>
                <hr />
                <h2>Slick Slider</h2>
            </div>
            <Slider {...settings}>
                {UUU.map((slide, index) => {
                    return (
                        <Card key={index}>
                            <Card.Body>
                                <img
                                    style={{
                                        Width: '100%',
                                        height: '500px',
                                        objectFit: 'contain'
                                    }}
                                    src={slide.path}
                                    alt="First slide"
                                />
                                <Card.Title>{slide.title}</Card.Title>
                                <Card.Text>{slide.desc}</Card.Text>
                                <Button variant="warning">{slide.title}</Button>
                            </Card.Body>
                        </Card>
                    )
                })}
            </Slider>
            <br />
        </>
    )
}

export default index
