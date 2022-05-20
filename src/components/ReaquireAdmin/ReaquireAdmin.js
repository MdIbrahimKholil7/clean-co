import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';

const ReaquireAdmin = ({children}) => {
    const location = useLocation()
    const [admin]=useAdmin()
    const user = true

    if (!user || !admin) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }

    return children
};

export default ReaquireAdmin;