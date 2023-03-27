import React from 'react'
import { Button, Card, Carousel, Stack } from 'react-bootstrap'
import image1 from '../../assets/images/sliderImages/image1.avif'
import image2 from '../../assets/images/sliderImages/image2.avif'
import image3 from '../../assets/images/sliderImages/image3.avif'
import image4 from '../../assets/images/sliderImages/image4.avif'
import image5 from '../../assets/images/sliderImages/image5.avif'

const CarouselSlider = () => {
    const UUU = [
        { title: 'slide1', path: image1, desc: 'ddddddd' },
        { title: 'slide2', path: image2, desc: 'ddddddd' },
        { title: 'slide3', path: image3, desc: 'ddddddd' },
        { title: 'slide4', path: image4, desc: 'ddddddd' },
        { title: 'slide5', path: image5, desc: 'ddddddd' }
    ]

    return (
        <>
            <div>
                <hr />
                <h2>Carousel Slider</h2>
            </div>
            <Carousel
                autoPlay={true}
                interval={2000}
                indicators={false}
                controls={false}
                pause="hover"
            >
                {UUU.map((slide, index) => {
                    return (
                        <Carousel.Item key={index}>
                            <Stack
                                direction="horizontal"
                                className="h-100 justify-content-center align-items-center"
                                gap={3}
                            >
                                <Card>
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
                                        <Button variant="warning">
                                            {slide.title}
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Stack>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </>
    )
}

export default CarouselSlider
