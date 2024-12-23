import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CaptainProtectWrapper = ({children}) => {
  const token=localStorage.getItem('uber-jwt');

  const navigate=useNavigate();
  useEffect(() => {
      if(!token)
      {
          navigate('/captainlogin');
      }
  }, [token]);
    return (
        <div>
            {children}
        </div>
    );
}

export default CaptainProtectWrapper