import React, { useEffect } from 'react';
import google from '../../../../images/google.png'
import facebook from '../../../../images/facebook.png'
import github from '../../../../images/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../../firbaseInit';
import { useNavigate } from 'react-router-dom';
import Loading from '../../shared/Loading/Loading';

const JointLogIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate()
    // to show other option also while try to su=ign in google
    let errorElement
    if (error || error1) {
        errorElement = <div>
            <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
        </div>
    }
    // i don't now why this error happen ?
    // if (loading || loading1) {
    //     return <Loading></Loading>
    // }
    useEffect(() => {
        if (user || user1) {
            navigate('/home')
        }

    }, [])

    if (loading || loading1) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '2px' }} className='bg-primary w-50'></div>
                <p className='mt-3 px-2'>or</p>
                <div style={{ height: '2px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div>
                {/* here d-block mx-auto both do center btn */}
                <button onClick={() => signInWithGoogle()} className='btn btn-info w-50 d-block mx-auto my-3 '>
                    <img className='me-2' style={{ width: '20px' }} src={google} alt="" />
                    Google sign In</button>
                <button className='btn btn-info w-50 d-block mx-auto my-3'>
                    <img className='me-2' style={{ width: '20px' }} src={facebook} alt="" />
                    Facebook sign In</button>
                <button onClick={() => signInWithGithub()} className='btn btn-info w-50 d-block mx-auto my-3'>
                    <img className='me-2' style={{ width: '20px' }} src={github} alt="" />
                    Github sign In</button>
            </div>
        </div>
    );
};

export default JointLogIn;