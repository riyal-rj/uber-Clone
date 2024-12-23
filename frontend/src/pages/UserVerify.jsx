import React, { useState } from 'react'
import useUserStore from '../config/backend.integrate.js';
import { useNavigate} from 'react-router-dom';
import toast from 'react-hot-toast';
const UserVerify = () => {
    const [code, setCode] = useState(Array(6).fill(""));

    // Handles input changes
    const handleChange = (value, index) => {
        if (/^\d$/.test(value)) {
            const newCode = [...code];
            newCode[index] = value;
            setCode(newCode);
            // Move focus to the next input
            if (index < 5) {
                document.getElementById(`input-${index + 1}`).focus();
            }
        } else if (value === "") {
            // Allow backspace to delete
            const newCode = [...code];
            newCode[index] = "";
            setCode(newCode);
        }
    };

    // Handle keyboard navigation
    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !code[index]) {
            if (index > 0) {
                document.getElementById(`input-${index - 1}`).focus();
            }
        }
    };

    const navigate=useNavigate();
    const {user_verify} = useUserStore();
    // Handles form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const enteredCode = code.join("");
        console.log("Entered Code:", enteredCode);
        setCode(Array(6).fill(""));

        const response= await user_verify(enteredCode);
        if(response.status===200)
        {
            console.log('User verified successfully');
            toast.success('User verified successfully');
            navigate('/home');
        }
        else
        {
            console.log('User verification failed');
        }
    };
    return (
        <div className="p-7 h-screen flex flex-col justify-between">
            <img className='w-20 ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1200px-Uber_logo_2018.png" alt="" />
            <img src="/uber-car.gif" alt="" />
            <div className="flex flex-col items-center">
                <h1 className="text-2xl font-bold mb-6">Enter Verification Code</h1>
                <form className="flex flex-col items-center" onSubmit={handleSubmit} >
                    <div className="flex gap-2 mb-6">
                        {code.map((value, index) => (
                            <input
                                key={index}
                                id={`input-${index}`}
                                type="text"
                                maxLength="1"
                                value={value}
                                onChange={(e) => handleChange(e.target.value, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                className="w-12 h-12 text-center border rounded text-xl focus:outline-none focus:ring-2 focus:ring-yellow-600 placeholder:text-base"
                            />
                        ))}
                    </div>
                    <button className='bg-[#111] flex text-white text-center justify-center font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Start Your Journey</button>
                </form>
            </div>
        </div>
    )
}

export default UserVerify