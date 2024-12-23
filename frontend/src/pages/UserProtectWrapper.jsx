import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const UserProtectWrapper = ({children}) => {
    const token=localStorage.getItem('uber-jwt');

    const navigate=useNavigate();
    useEffect(() => {
        if(!token)
        {
            navigate('/userlogin');
        }
    }, [token])  
   return (
    <div>
        {children}
    </div>
  )
}

export default UserProtectWrapper