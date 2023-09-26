import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Login.css'
import Card from 'react-bootstrap/Card';
const Enquiry = () => {
    return (
        <div>
            <hr></hr>
            <h1 className='container rounded-3 w-50 text-center bg-warning pt-3 pb-3'>For Booking</h1>
            <hr></hr>
            <Card id='Card' style={{ width: '22rem' }} className='mt-4 mx-auto'>
                
                <Card.Body>
                    <Card.Title className='text-center'>Book Now!</Card.Title>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name </Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Mobile </Form.Label>
                    <Form.Control type="tel" placeholder="Enter Mobile No" />
                </Form.Group>
                
                <div className='text-center'>
                <Button  variant="primary" type="submit">
                    Submit
                </Button>
                </div>
                
            </Form>
            </Card.Body>
            </Card>
        </div>
    )
}

export default Enquiry