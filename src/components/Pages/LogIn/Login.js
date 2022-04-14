import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()
    const handleSubmit = e => {
        e.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
    }
    const navigateRef = e => {
        navigate('/register')
    }
    return (
        <div className='container w-50 mx-auto'>
            <h3 className='text-promary text-center mt-3'>Plz logIn</h3>
            <Form></Form>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>

            </Form>
            <p>New to Genius Car?<Link to='/register' className='text-danger pe-auto text-decoration-none' onClick={navigateRef}> Plz Register</Link></p>
        </div>
    );
};

export default Login;