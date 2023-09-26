
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import preWed1 from '../assets/preWed.jpg'
import preWed2 from '../assets/preWed2.jpg'
import preWed3 from '../assets/preWed3.jpg'

import wed1 from '../assets/wed1.jpg';
import wed2 from '../assets/wed2.jpg';
import wed3 from '../assets/wed3.jpeg';
import wed4 from '../assets/wed4.jpeg';
import wed5 from '../assets/wed5.jpg';

import './Content.css'


const Content = () => {
    const [showFullText1, setShowFullText1] = useState(false);
    const [showFullText2, setShowFullText2] = useState(false);
    const toggleFullText1 = () => {
        setShowFullText1(!showFullText1);
    };
    const toggleFullText2 = () => {
        setShowFullText2(!showFullText2);
    };

    return (
        <div>
            <hr></hr>
            <h1 className='container w-50 pt-3 pb-3 rounded-3 bg-warning text-center mt-3' style={{color:'blueviolet', fontSize:'40px'}}>Packages</h1>
            <hr></hr>
            <Row>
                <Col xs={12} md={7} lg={7}>
                    <Carousel className='container'>
                        <Carousel.Item className='CarouselItem' style={{ background: 'black' }}>
                            <img src={preWed1} alt='preWed1' className='img-fluid' />
                        </Carousel.Item>
                        <Carousel.Item className='CarouselItem' style={{ background: 'black' }}>
                            <img src={preWed2} alt='preWed2' className='img-fluid' />
                        </Carousel.Item>
                        <Carousel.Item className='CarouselItem' style={{ background: 'black' }}>
                            <img src={preWed3} alt='preWed3' className='img-fluid' />
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col xs={12} md={5} lg={5}>
                    <div className='text-center'>
                        <h1 className='text-overly' style={{ marginTop: '10px', color: 'orangered' }}>Pre-Wedding Photo Shoot</h1>
                        <p className='p-3'>A pre-wedding photo shoot, often referred to as an engagement photo session, is a delightful and meaningful photography session that takes place before the wedding day.</p>
                        {showFullText1 ? (
                            <p className='p-3'>
                               It has gained popularity in recent years as couples seek to capture the essence of their love story in a more relaxed and informal setting. During a pre-wedding photo shoot, the engaged couple, dressed in their wedding attire or casual outfits, ventures to picturesque locations that hold sentimental value to them. These locations could be the place where they first met, a serene natural setting, or even the vibrant streets of a city they love.
                            </p>
                        ) : null}
                        <button className='btn btn-primary' onClick={toggleFullText1}>
                            {showFullText1 ? 'Less Details' : 'More Details..'}
                        </button>
                    </div>
                </Col>
            </Row>

            <Row className='mt-5'>
                <Col xs={12} md={5} lg={5}>
                    <div className='text-center'>
                        <h1 className='text-overly text-center ' style={{ marginTop: '10px', color: 'orangered' }}>Wedding Photo Shoot</h1>
                        <p className='p-3'>
                        A wedding photoshoot is an exquisite and cherished tradition that captures the essence of one of life's most significant milestones - the celebration of love and commitment between two individuals.
                        </p>
                        {showFullText2 ? (
                            <p className='p-3'>
                               It has gained popularity in recent years as couples seek to capture the essence of their love story in a more relaxed and informal setting. During a pre-wedding photo shoot, the engaged couple, dressed in their wedding attire or casual outfits, ventures to picturesque locations that hold sentimental value to them. These locations could be the place where they first met, a serene natural setting, or even the vibrant streets of a city they love.
                            </p>
                        ) : null}
                        <button className='btn btn-primary' onClick={toggleFullText2}>
                            {showFullText2 ? 'Less Details' : 'More Details..'}
                        </button>
                    </div>

                </Col>
                <Col xs={12} md={7} lg={7}>
                    <Carousel className='container-sm '>
                        <Carousel.Item className='CarouselItem  ' style={{ background: 'black' }} >
                            <img src={wed1} alt='preWed1' width={'100%'}></img>
                        </Carousel.Item>
                        <Carousel.Item className='CarouselItem  ' style={{ background: 'black' }} >
                            <img src={wed2} alt='preWed2' width={'100%'}></img>
                        </Carousel.Item>
                        <Carousel.Item className='CarouselItem' style={{ background: 'black' }} >
                            <img src={wed3} alt='preWed3' width={'100%'}></img>
                        </Carousel.Item>
                        <Carousel.Item className='CarouselItem' style={{ background: 'black' }} >
                            <img src={wed4} alt='preWed3' width={'100%'}></img>
                        </Carousel.Item>
                        <Carousel.Item className='CarouselItem' style={{ background: 'black' }} >
                            <img src={wed5} alt='preWed3' width={'100%'}></img>
                        </Carousel.Item>

                    </Carousel>


                </Col>
            </Row>
        </div>

    )
}

export default Content