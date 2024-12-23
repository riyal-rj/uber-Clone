import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/Captain.context';
import AuthStore from '../config/backend.integrate';
import toast from 'react-hot-toast';

const CaptainSignup = () => {
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [vehicleColor, setVehicleColor] = useState('');
    const [vehicleNumber, setVehicleNumber] = useState('');
    const [vehicleCapacity, setVehicleCapacity] = useState('');
    const [vehicleType, setVehicleType] = useState('');

    const navigate = useNavigate();


    const {captain, setCaptain}=useContext(CaptainDataContext);
    const {captain_signUp} = AuthStore();

    const submitHandler = async (e) => {
        e.preventDefault();
        const response=await captain_signUp({
            firstname,
            lastname,
            phoneNo:phone,
            email,
            password,
            vehicleColor,
            vehicleNumber,
            vehicleCapacity,
            vehicleType,
        });

        if(response.status===201)
        {
            const data=response.data;
            setCaptain(data.captain);
            localStorage.setItem('uber-jwt',data.token);
            console.log('Captain signed up successfully');
            toast.success('Captain signed up successfully');
            navigate('/captainHome');
        }

        setEmail('');
        setPhone('');
        setFirstname('');
        setLastname('');
        setPassword('');
        setVehicleColor('');
        setVehicleNumber('');
        setVehicleCapacity('');
        setVehicleType('');
    };

    return (
        <div className="p-6 h-screen flex flex-col justify-between">
            {/* Logo */}
            <img className="w-14 mb-6" src="https://seeklogo.com/images/U/uber-drive-logo-993E1C334C-seeklogo.com.png" alt="Uber logo" />

            {/* Signup Form */}
            <div>
                <form onSubmit={(e) => submitHandler(e)}>
                    {/* Name Input */}
                    <h4 className="text-sm font-medium mb-2">Enter your name</h4>
                    <div className="flex gap-3 mb-4">
                        <input
                            className="bg-[#eeeeee] rounded w-1/2 px-4 py-2 border text-sm placeholder:text-sm"
                            type="text"
                            id="firstnameInput"
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                            placeholder="Firstname"
                        />
                        <input
                            className="bg-[#eeeeee] rounded w-1/2 px-4 py-2 border text-sm placeholder:text-sm"
                            type="text"
                            id="lastnameInput"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                            placeholder="Lastname"
                        />
                    </div>

                    {/* Phone Number */}
                    <h4 className="text-sm font-medium mb-2">Enter your phone number</h4>
                    <input
                        className="bg-[#eeeeee] rounded mb-4 w-full px-4 py-2 border text-sm placeholder:text-sm"
                        type="text"
                        id="phoneInput"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Enter phone number"
                    />

                    {/* Email */}
                    <h4 className="text-sm font-medium mb-2">Enter your email</h4>
                    <input
                        className="bg-[#eeeeee] rounded mb-4 w-full px-4 py-2 border text-sm placeholder:text-sm"
                        type="email"
                        id="emailInput"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                    />

                    {/* Password */}
                    <h4 className="text-sm font-medium mb-2">Enter your password</h4>
                    <input
                        type="password"
                        className="bg-[#eeeeee] rounded mb-4 w-full px-4 py-2 border text-sm placeholder:text-sm"
                        id="passwordInput"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                    />

                    {/* Vehicle Details */}
                    <h4 className="text-sm font-medium mb-2">Enter your vehicle details</h4>
                    <div className="flex gap-3 mb-4">
                        <input
                            className="bg-[#eeeeee] rounded-lg w-full px-4 py-2 border border-[#cccccc] focus:border-[#600D1C] focus:outline-none text-sm placeholder:text-sm"
                            type="text"
                            id="vehicleColorInput"
                            value={vehicleColor}
                            onChange={(e) => setVehicleColor(e.target.value)}
                            placeholder="Color"
                        />
                        <input
                            className="bg-[#eeeeee] rounded-lg w-full px-4 py-2 border border-[#cccccc] focus:border-[#600D1C] focus:outline-none text-sm placeholder:text-sm"
                            type="text"
                            id="vehicleNumberInput"
                            value={vehicleNumber}
                            onChange={(e) => setVehicleNumber(e.target.value)}
                            placeholder="Vehicle number"
                        />
                    </div>

                    <div className="flex gap-3 mb-4">
                        {/* Vehicle Capacity */}
                        <select
                            className="bg-[#f7f7f7] rounded-lg px-4 py-2 border w-full border-[#cccccc] focus:border-[#600D1C] focus:outline-none text-sm text-[#333333] transition-all duration-200 ease-in-out shadow-sm hover:shadow-md"
                            onChange={(e) => setVehicleCapacity(e.target.value)}
                            value={vehicleCapacity}
                        >
                            <option value="" disabled>
                                Capacity
                            </option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        
                        {/* Vehicle Type */}
                        <select
                            className="bg-[#f7f7f7] rounded-lg px-4 py-2 w-full border border-[#cccccc] focus:border-[#600D1C] focus:outline-none text-sm text-[#333333] transition-all duration-200 ease-in-out shadow-sm hover:shadow-md"
                            onChange={(e) => setVehicleType(e.target.value)}
                            value={vehicleType}
                        >
                            <option value="" disabled>
                                Type
                            </option>
                            <option value="car">Car</option>
                            <option value="bike">Bike</option>
                            <option value="toto">Toto</option>
                        </select>

                    </div>

                    {/* Become Captain Button */}
                    <button
                        className="bg-[#600D1C] text-white text-center justify-center font-semibold mb-7 rounded px-4 py-2 w-full text-lg"
                    >
                        Bingo! Let's Go as Captain
                    </button>

                    {/* Login Link */}
                    <p className="text-center font-semibold mb-4">
                        Already have an account?{" "}
                        <Link className="text-blue-900 underline" to="/captainLogin">
                            Login
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default CaptainSignup;
