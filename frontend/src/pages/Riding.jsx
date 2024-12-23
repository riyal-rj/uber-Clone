import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Riding = () => {
    const location = useLocation();
    const { ride } = location.state || {}; // Retrieve ride data
    const navigate = useNavigate();

    return (
        <div className="h-screen bg-gray-100 flex flex-col">
            {/* Home Button */}
            <Link
                to="/home"
                className="fixed right-4 top-4 h-10 w-10 bg-white flex items-center justify-center rounded-full shadow-md"
            >
                <i className="text-lg font-medium ri-home-5-line text-gray-700"></i>
            </Link>

            {/* Live Tracking Section */}
            <div className="flex-grow bg-white flex items-center justify-center text-lg font-bold text-gray-800 shadow-sm">
                Live Tracking (Map Area)
            </div>

            {/* Details Section */}
            <div className="p-4 bg-white rounded-t-lg shadow-lg">
                {/* Driver Details */}
                <div className="flex items-center gap-3 mb-4">
                    <img
                        className="h-16 w-16 rounded-lg object-cover shadow-md"
                        src="/defualt.jpg"
                        alt="Driver"
                    />
                    <div className="flex-grow">
                        <h2 className="text-lg font-semibold capitalize text-gray-800">Tej Kumar</h2>
                        <h4 className="text-base font-medium text-gray-700">WB-XS234</h4>
                        <p className="text-sm text-gray-600 flex items-center gap-1">
                            Maruti Suzuki Alto <i className="ri-car-fill text-gray-600"></i>
                        </p>
                        <div className="text-sm font-semibold border rounded-md flex items-center justify-center bg-black text-white py-1">
                            OTP: 3452
                        </div>
                        <p className="text-xs text-gray-600 font-semibold mt-1 flex items-center gap-1">
                            Rating: 3.2 <i className="ri-star-fill text-yellow-500"></i>
                        </p>
                    </div>
                </div>

                {/* Address and Payment Details */}
                <div className="space-y-3">
                    {/* Pickup Location */}
                    <div className="flex items-start gap-2">
                        <i className="text-lg ri-map-pin-fill text-gray-700"></i>
                        <div>
                            <h3 className="text-base font-semibold text-gray-800">191, 7 Point</h3>
                            <p className="text-sm text-gray-600">
                                Marina garden court, Park Circus, Ballygunge, Kolkata, West Bengal
                                700017
                            </p>
                        </div>
                    </div>

                    {/* Payment Information */}
                    <div className="flex items-center gap-2">
                        <i className="ri-money-rupee-circle-fill text-lg text-gray-700"></i>
                        <h3 className="text-base font-semibold text-gray-800">Cash Payment</h3>
                        <p className="text-base font-semibold text-gray-800">₹193.20</p>
                        <i className="ri-cash-line text-gray-700 text-lg"></i>
                    </div>
                </div>

                {/* Payment Button */}
                <button className="w-full mt-4 bg-green-600 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-green-700 transition">
                    Make a Payment
                </button>
            </div>
        </div>
    );
};

export default Riding;
