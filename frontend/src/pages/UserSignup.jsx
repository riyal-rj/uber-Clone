import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useUserStore from '../config/backend.integrate.js';
import toast from 'react-hot-toast';
import { UserDataContext } from '../context/User.Context.jsx';

const UserSignup = () => {
    const [phoneNo, setPhoneNo] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const {user,setUser}=useContext(UserDataContext);

    const navigate = useNavigate();

    const { user_signUp} = useUserStore();

    const submitHandler = async (e) => {
        e.preventDefault();
        const response=await user_signUp({
            firstname,
            lastname,
            phoneNo,
            email,
            password,
        })


        if(response.status===201)
        {
            toast.success('User signed up successfully');
            const data=response.data;
            setUser(data.user);
            localStorage.setItem('uber-jwt',data.token);
            navigate('/verifyUser');
            setEmail('');
            setPhoneNo('');
            setFirstname('');
            setLastname('');
            setPassword('');
            setErrorMessage('');
        }
        else
        {
            toast.error(response.data.message||'User signup failed');
            setErrorMessage(response.data.message||'User signup failed');
        }
            
    };

    return (
        <div className="p-7 h-screen flex flex-col justify-between">
            {/* Logo */}
            <img
                className="w-20"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1200px-Uber_logo_2018.png"
                alt="Uber Logo"
            />

            {/* Signup Form */}
            <div>
                <form onSubmit={(e) => submitHandler(e)}>
                    <h4 className="text-base font-medium mb-2">Enter your name</h4>
                    <div className="flex justify-between gap-3">
                        <input
                            className="bg-[#eeeeee] mb-4 rounded w-1/2 px-4 py-2 border text-base placeholder:text-base"
                            type="text"
                            id="firstnameInput"
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                            placeholder="Firstname"
                        />
                        <input
                            className="bg-[#eeeeee] mb-4 w-1/2 rounded px-4 py-2 border text-base placeholder:text-base"
                            type="text"
                            id="lastnameInput"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                            placeholder="Lastname"
                        />
                    </div>

                    <h4 className="text-base font-medium mb-2">Enter your phone number</h4>
                    <input
                        className="bg-[#eeeeee] mb-4 rounded px-4 py-2 border w-full text-base placeholder:text-base"
                        type="text"
                        id="contactInput"
                        value={phoneNo}
                        onChange={(e) => setPhoneNo(e.target.value)}
                        placeholder="Enter your phone number"
                    />

                    <h4 className="text-base font-medium mb-2">Enter your email</h4>
                    <input
                        className="bg-[#eeeeee] mb-4 rounded px-4 py-2 border w-full text-base placeholder:text-base"
                        type="email"
                        id="emailInput"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                    />

                    <h4 className="text-base font-medium mb-2">Enter your password</h4>
                    <input
                        type="password"
                        className="bg-[#eeeeee] mb-4 rounded px-4 py-2 border w-full text-base placeholder:text-base"
                        id="passwordInput"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                    />

                    {/* Error Message */}
                    {errorMessage && (
                        <p className="text-red-600 text-sm mb-4">{errorMessage}</p>
                    )}

                    {/* Proceed to Verification Button */}
                    <button
                        type="submit"
                        className="bg-[#111] flex text-white text-center justify-center font-semibold mb-7 rounded px-4 py-2 w-full text-lg"
                    >
                        Proceed to Verification
                    </button>

                    <p className="text-center font-semibold">
                        Already have an account?{' '}
                        <Link className="text-blue-900 underline" to="/userlogin">
                            Login
                        </Link>
                    </p>
                </form>
            </div>

            <p className="text-[10px] leading-tight">
                By proceeding, I agree that Uber or its representatives may contact me
                by email, phone, or SMS (including by automatic telephone dialing
                system) at the email address or number I provide, including for
                marketing purposes. I have read and understand the relevant.
            </p>
        </div>
    );
};

export default UserSignup;
