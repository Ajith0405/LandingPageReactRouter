import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import profile from '../assets/profile.png';
import Card from 'react-bootstrap/Card';
import './Login.css'
import {Link} from 'react-router-dom'

const Login = () => {
    return (
        <div>
            <Card id='Card' style={{ width: '22rem' }} className='mt-4 mx-auto'>
                <Card.Img variant="top" className='mx-auto mt-3' src={profile} style={{width:'120px'}} />
                <Card.Body>
                    <Card.Title className='text-center'>Login</Card.Title>
                    <Form style={{ background: 'white' }} className='mt-3 mb-3 py-4'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <div className='text-center'>
                    <Button variant="primary" type="submit">
                         Login
                    </Button>
                    <Button className='ms-2' variant="warning" type="submit">
                         Reset
                    </Button>
                </div>
                <p className='text-end mt-2'>Click here to <Link to="/Register" >Register</Link></p>
                
            </Form>
                </Card.Body>
            </Card>
            
        </div>
    )
}

export default Login