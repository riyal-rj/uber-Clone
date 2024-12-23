import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useUserStore from '../config/backend.integrate';
import toast from 'react-hot-toast';
import { UserDataContext } from '../context/User.Context';

const userLogin = () => {
    const [emailOrphone, setEmailOrPhone] = useState('');
    const [password, setPassword] = useState('');

    const {user,setUser}=useContext(UserDataContext);

    const {user_login} = useUserStore();

    const navigate = useNavigate();

    const formHandler = async (e) => {
        e.preventDefault();
        console.log(emailOrphone, password);

        const response=await user_login({emailOrphone, password});
        console.log(response);
        if(response.status===200)
        {
            const data=response.data;
            console.log('User logged in successfully');
            toast.success('User logged in successfully');
            setUser(data.user);
            console.log(data);
            localStorage.setItem('uber-jwt',data.token);
            navigate('/home');
            setEmailOrPhone('');
            setPassword('');
        }
        else
        {
            console.log('User login failed');
            toast.error(response.data.message||'User login failed');
        }
       
    }
    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
            <img className='w-20 ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1200px-Uber_logo_2018.png" alt="" />
            <div >
            <form onSubmit={(e) => {formHandler(e)}} >
                <h3 className='text-lg font-medium mb-2'>Enter your email or phone</h3>
                <input className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                    type="text" id="contactInput"
                    value={emailOrphone}
                    onChange={(e) => setEmailOrPhone(e.target.value)}
                    placeholder="Enter email or phone" />
                <h3 className='text-lg font-medium mb-2'>Enter your password</h3>
                <input type="password"
                    className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                    id="passwordInput"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password" />
                <button className='bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Login</button>

                <p className=' text-center font-semibold' >Your Ride Awaits! 🛺 <Link className='text-blue-900 underline' to={"/usersignup"}>Register</Link></p>
            </form>
            </div>

            <div>
                <Link to={'/captainLogin'}   className='bg-[#600D1C] flex text-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'>LogIn as Captain</Link>
            </div>
        </div>
    )
}

export default userLogin