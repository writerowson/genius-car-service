import React from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firbaseInit';
import JointLogIn from './Jointlogin/JointLogIn';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate()

    const navigateLogin = () => {
        navigate('/login')
    }

    useEffect(() => {
        if (user) {
            navigate('/home')
        }
    })

    const handleRegister = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value

        createUserWithEmailAndPassword(email, password)
    }


    return (
        <div className='register-form'>
            <h3 style={{ textAlign: 'center' }}>plz register</h3>
            <form onSubmit={handleRegister}>

                <input type="text" name="name" id="1" placeholder='Your Name' />
                <input type="email" name="email" id="2" placeholder='email Address' required />
                <input type="password" name="password" id="3" placeholder='password' required />
                <input variant="primary" type="submit" value='Register' />

            </form>
            <p>Already have an account? <Link to='/login ' className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
            <JointLogIn></JointLogIn>
        </div>

    );
};

export default Register;