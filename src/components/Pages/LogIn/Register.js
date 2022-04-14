import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
const Register = () => {
    const navigate = useNavigate()

    const navigateLogin = () => {
        navigate('/login')
    }
    const handleRegister = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value
    }


    return (
        <div className='register-form'>
            <h3 style={{ textAlign: 'center' }}>plz register</h3>
            <form onSubmit={handleRegister}>

                <input type="text" name="name" id="" placeholder='Your Name' />
                <input type="email" name="email" id="" placeholder='email Address' required />
                <input type="password" name="password" id="" placeholder='password' required />
                <input type="submit" value='Register' />

            </form>
            <p>Already have an account? <Link to='/login ' className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}></Link></p>
        </div>
    );
};

export default Register;