import React, { Children } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../../firbaseInit';
import Loading from '../../shared/Loading/Loading';

const RequireAuth = ({ children }) => {
    // to need permission for go any page
    //     https://stackblitz.com/github/remix-run/react-router/tree/main/examples/auth?file=src/App.tsx


    const [user, loading] = useAuthState(auth)
    console.log('inside require auth', user);
    const location = useLocation()
    if (loading)
        return <Loading></Loading>
    // this is why it every time goin login page 

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }
    return children
};

export default RequireAuth;
