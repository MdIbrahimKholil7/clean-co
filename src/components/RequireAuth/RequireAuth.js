import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';

const RequireAuth = ({ children }) => {
    const location = useLocation()
    const user = false

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }

    return children
};

export default RequireAuth;