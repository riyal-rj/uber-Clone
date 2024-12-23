import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const FinishRide = (props) => {
    const navigate = useNavigate();

    

    return (
        <div className="relative p-4 bg-white rounded-lg shadow-lg max-w-md mx-auto mt-6"> {/* Adjusted margin-top */}
            {/* Close Button */}
            <h5 className="absolute top-0 right-2 p-1 cursor-pointer"
                onClick={() => {
                    props.setFinishRidePanel(false);
                    navigate('/captainHome');
                }}
            >
                <i className="text-xl text-[#600D1C] ri-arrow-down-wide-line"></i>
            </h5>

            {/* Title */}
            <h3 className="text-lg font-bold mb-3 text-gray-800 text-center">Finish Your Trip</h3>

            {/* Driver Info */}
            <div className="flex items-center justify-between p-2 bg-gradient-to-r from-[#d06a7b] to-[#a94f64] rounded-lg mb-3">
                <div className="flex items-center gap-2">
                    <img
                        className="h-9 w-9 rounded-full object-cover border-2 border-[#600D1C]"
                        src="/defualt.jpg"
                        alt="Driver"
                    />
                    <h2 className="text-sm font-bold text-white">Ritankar Jana</h2>
                </div>
                <h5 className="text-sm font-bold text-white">2.2 KM</h5>
            </div>

            {/* Driver's Phone Number */}
            <div className="flex items-center gap-3 p-2 bg-gray-100 rounded-lg mb-3">
                <i className="ri-phone-line text-lg text-[#600D1C]"></i>
                <div>
                    <h3 className="text-xs font-semibold text-gray-800">+91 98765 43210</h3>
                </div>
            </div>

            {/* Address and Payment Details */}
            <div className="w-full space-y-2">
                {/* Pickup Address */}
                <div className="flex items-center gap-3 p-2 border-b border-gray-300">
                    <i className="ri-map-pin-user-fill text-lg text-[#600D1C]"></i>
                    <div>
                        <h3 className="text-xs font-semibold text-gray-800">104/A/2</h3>
                        <p className="text-xs text-gray-600">Purba Sinthee Road, DumDum Kolkata-700030</p>
                    </div>
                </div>

                {/* Dropoff Address */}
                <div className="flex items-center gap-3 p-2 border-b border-gray-300">
                    <i className="ri-map-pin-fill text-lg text-[#600D1C]"></i>
                    <div>
                        <h3 className="text-xs font-semibold text-gray-800">191, 7 Point</h3>
                        <p className="text-xs text-gray-600">Marina garden court, Park Circus, Ballygunge, Kolkata, West Bengal 700017</p>
                    </div>
                </div>

                {/* Payment Details */}
                <div className="flex items-center gap-3 p-2">
                    <i className="ri-money-rupee-circle-fill text-lg text-[#600D1C]"></i>
                    <div>
                        <h3 className="text-sm font-medium">₹295.93</h3>
                        <p className="text-xs text-gray-600">Cash Payment</p>
                    </div>
                </div>
            </div>



            {/* Action Buttons */}
            <div className="mt-4 w-full flex flex-col gap-2">
                <Link to={'/captainHome'} className="w-full text-sm flex justify-center bg-gradient-to-r from-green-600 to-green-800 text-white font-semibold py-2 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                    Complete Trip
                </Link>
            </div>
        </div>
    )
}

export default FinishRide