import React, { useState } from 'react'

const WaitingForCaptain = (props) => {
    const [showPhone, setShowPhone] = useState(false);
    const handleClick = () => setShowPhone(!showPhone);
    return (
        <div className="bg-white p-4 rounded-lg shadow-lg max-w-lg mx-auto">
            <h5 className="p-2 text-center w-full absolute top-2 left-0 right-0 cursor-pointer"
                onClick={() => props.setWaitingForCaptain(false)}>
                <i className="text-xl text-gray-600 ri-arrow-down-wide-fill"></i>
            </h5>
            
            <div className="flex items-center justify-between p-3 bg-gray-100 rounded-lg border border-gray-200 mb-3">
                {/* Pickup Point Text */}
                <h2 className="text-base font-semibold text-gray-700">
                    Meet at the Pickup Point
                </h2>
                {/* Time Indicator */}
                <div className="flex items-center justify-center w-12 h-12 bg-black text-white text-sm font-bold rounded-full">
                    8 min
                </div>
            </div>
            
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
            
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-full shadow-sm mb-3">
                {/* Pickup Notes Text */}
                <div className="text-sm text-gray-600">
                    Any pickup notes?
                </div>

                {/* Phone Icon */}
                <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-md relative cursor-pointer"
                    onClick={handleClick}
                >
                    <i className="ri-phone-fill text-black text-lg"></i>
                    {showPhone && (
                        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded-md px-2 py-1 shadow-md">
                            8334826325
                        </div>
                    )}
                </div>
            </div>

            <div className="flex items-center gap-3 border-b-2 pb-2 mb-3">
                <i className="text-xl ri-map-pin-fill text-gray-700"></i>
                <div>
                    <h3 className="text-lg font-semibold text-gray-800">191, 7 Point</h3>
                    <p className="text-base text-gray-600">Marina garden court, Park Circus, Ballygunge, Kolkata, West Bengal 700017</p>
                </div>
            </div>

            <div className="flex items-center gap-3 pt-2 mb-3">
                <i className="ri-money-rupee-circle-fill text-xl text-gray-700"></i>
                <h3 className="text-lg font-semibold text-gray-800">Cash Payment</h3>
                <p className="text-base font-semibold text-gray-800">₹193.20</p>
                <i className="ri-cash-line text-gray-700 text-xl"></i>
            </div>
        </div>
    )
}

export default WaitingForCaptain;
