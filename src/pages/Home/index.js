import React from 'react'
import CarouselSlider from '../../components/CarouselSlider'
import SlickSlider from '../../components/SlickSlider'
import { Container, Row, Col } from 'react-bootstrap'
const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <Container>
                <Row>
                    <Col className="col-lg-6">
                        <CarouselSlider />
                    </Col>
                    <Col className="col-lg-6">
                        <SlickSlider />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home
