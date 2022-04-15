import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firbaseInit';
import JointLogIn from './Jointlogin/JointLogIn';

const Register = () => {
    const [agree, setagree] = useState(false)
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, error1] = useUpdateProfile(auth);

    const navigate = useNavigate()

    const navigateLogin = () => {
        navigate('/login')
    }

    useEffect(() => {
        if (user) {
            console.log('user', user);
        }
    })

    const handleRegister = async (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value
        // const agree = e.target.terms.checked

        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home')
    }


    return (
        <div className='register-form'>
            <h3 style={{ textAlign: 'center' }}>plz register</h3>
            <form onSubmit={handleRegister}>

                <input type="text" name="name" id="1" placeholder='Your Name' />
                <input type="email" name="email" id="2" placeholder='email Address' required />
                <input type="password" name="password" id="3" placeholder='password' required />
                <input onClick={() => setagree(!agree)} className='me-2' type="checkbox" name='terms' id='terms' />
                {/* <label className={agree ? 'ps-2 text-primary' : 'ps-2 text-danger'} htmlFor="">Accepts terms and condition</label> */}
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="">Accepts terms and condition</label>
                <input
                    disabled={!agree} className='w-50 mt-2 mx-auto btn btn-primary' variant="primary" type="submit" value='Register' />

            </form>
            <p>Already have an account? <Link to='/login ' className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
            <JointLogIn></JointLogIn>
        </div>

    );
};

export default Register;