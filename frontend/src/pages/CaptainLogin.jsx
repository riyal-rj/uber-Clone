import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthStore from '../config/backend.integrate';
import { CaptainDataContext } from '../context/Captain.context';
import toast from 'react-hot-toast';
const captainLogin = () => {
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const {captain,setCaptain}=useContext(CaptainDataContext);

    const { captain_login } = AuthStore();
    const formHandler = async(e) => {
        e.preventDefault();
        const response=await captain_login({ emailOrphone:emailOrPhone, password });
        if(response.status===200)
        {
            const data=response.data;
            setCaptain(data.captain);
            localStorage.setItem('uber-jwt',data.token);
            console.log('Captain logged in successfully');
            toast.success('Captain logged in successfully');
            navigate('/captainHome');
        }
        setEmailOrPhone('');
        setPassword('');
    }
        return (
            <div className='p-7 h-screen flex flex-col justify-between'>
                <img className='w-20 ' src="https://seeklogo.com/images/U/uber-drive-logo-993E1C334C-seeklogo.com.png" alt="" />
                <div >
                    <form onSubmit={(e) => { formHandler(e) }} >
                        <h3 className='text-lg font-medium mb-2'>Enter your email or phone</h3>
                        <input className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                            type="text" id="contactInput"
                            value={emailOrPhone}
                            onChange={(e) => setEmailOrPhone(e.target.value)}
                            placeholder="Enter email or phone" />
                        <h3 className='text-lg font-medium mb-2'>Enter your password</h3>
                        <input type="password"
                            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                            id="passwordInput"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password" />
                        <button className='bg-[#600D1C] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Login</button>

                        <p className=' text-center font-semibold' >Join Our Fleet Today! 🚗<Link to={"/captainsignup"} className=' text-blue-900 underline'>Register</Link></p>
                    </form>
                </div>

                <div>
                    <Link to={'/userLogin'} className='bg-black flex text-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'>LogIn as User</Link>
                </div>
            </div>
        )
    }

    export default captainLogin