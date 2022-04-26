import React, { Children } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../../firbaseInit';

import Loading from '../../shared/Loading/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth)
    console.log('inside require auth', user);
    const location = useLocation()
    // to need permission for go any page
    //     https://stackblitz.com/github/remix-run/react-router/tree/main/examples/auth?file=src/App.tsx

    if (loading)
        return <Loading></Loading>
    // this is why it every time goin login page 

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }
    if (user.providerData[0]?.pproviderId === 'password' && !user.emailVerified) {
        return <div>
            <h3 className='text-danger '>Your Email is not verified</h3>
            <h5 className='text-success'>Please Verify your email address</h5>
            <button>Send verification </button>
        </div>
    }

    return children
};

export default RequireAuth;
