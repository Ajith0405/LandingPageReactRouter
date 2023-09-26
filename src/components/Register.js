import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import profile from '../assets/profile.png';
import Card from 'react-bootstrap/Card';
const Register = () => {
    return (
        <div>
            <Card id='Card' style={{ width: '22rem' }} className='mt-4 mx-auto'>
                <Card.Img variant="top" className='mx-auto mt-3' src={profile} style={{ width: '120px' }} />
                <Card.Body>
                    <Card.Title className='text-center'>Register</Card.Title>
                    <Form className='mt-3 mb-3 py-4'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>First Name :</Form.Label>
                            <Form.Control type="text" placeholder="Enter First Name" />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Last Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Email </Form.Label>
                            <Form.Control type="email" placeholder="Enter Email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Mobile No </Form.Label>
                            <Form.Control type="text" placeholder="Enter Mobile No" />
                        </Form.Group>
                        <div className='text-center'>
                            <Button variant="primary" type="submit">
                                Register
                            </Button>
                            <Button className='ms-2' variant="warning" type="submit">
                                Reset
                            </Button>
                        </div>
                        <p className='text-end mt-2'>Click here to <Link to="/Login" >Login</Link></p>

                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Register