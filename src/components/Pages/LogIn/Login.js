import React, { useEffect, useRef } from 'react';
import { Form, Button } from 'react-bootstrap'
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import auth from '../../../firbaseInit';
import JointLogIn from './Jointlogin/JointLogIn';

const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()
    const location = useLocation()
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    let from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    })

    // to show other option also while try to su=ign in google
    let errorElement
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth)


    if (error) {
        errorElement = <div>
            <p className='text-danger'>Error: {error?.message} </p>
        </div>
    }

    const handleSubmit = e => {
        e.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value

        signInWithEmailAndPassword(email, password)
    }
    const navigateRegister = e => {
        navigate('/register')
    }

    const resetPassword = async () => {
        const email = emailRef.current.value
        await sendPasswordResetEmail(email);
        alert('Sent email');
    }

    return (
        <div className='container w-50 mx-auto'>
            <h3 className='text-promary text-center mt-3'>Plz logIn</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary w-50 mx-auto d-block" type="submit">
                    Log in
                </Button>

            </Form>
            {errorElement}
            <p>New to Genius Car?<Link to='/register' className='text-primary  pe-auto text-decoration-none' onClick={navigateRegister}> Plz Register</Link></p>
            <p>New to Genius Car?<Link to='/register' className='text-primary  pe-auto text-decoration-none' onClick={resetPassword}> Forget Password</Link></p>

            <JointLogIn></JointLogIn>
        </div >
    );
};

export default Login;