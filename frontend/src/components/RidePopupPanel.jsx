import React from 'react';

const RidePopupPanel = (props) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      {/* Close Icon */}
      <h5
        className="p-1 text-center w-[93%] absolute top-0"
        onClick={() => props.setRidePopupPanel(false)}
      >
        <i className="text-3xl text-[#600D1C] ri-arrow-down-wide-line"></i>
      </h5>

      {/* Header */}
      <h3 className="text-xl font-bold mb-4 text-gray-800 text-center">
        New Ride Available!
      </h3>

      {/* Driver Info */}
      <div className="flex items-center justify-between p-3 bg-gradient-to-r from-[#d06a7b] to-[#a94f64] rounded-lg">
        <div className="flex items-center gap-3">
          <img
            className="h-12 w-12  rounded-full object-cover border-2 border-[#600D1C]"
            src="/defualt.jpg"
            alt="Driver"
          />
          <h2 className="text-lg font-bold text-gray-800">Ritankar Jana</h2>
        </div>
        <h5 className="text-base font-bold text-gray-800">2.2 KM</h5>
      </div>

      {/* Ride Details */}
      <div className="w-full mt-4">
        {/* Pickup Address */}
        <div className="flex items-center gap-3 p-3 border-b border-gray-200">
          <i className="ri-map-pin-user-fill text-xl text-[#600D1C]"></i>
          <div>
            <h3 className="text-sm font-semibold text-gray-800">104/A/2</h3>
            <p className="text-xs text-gray-600">
              Purba Sinthee Road, DumDum Kolkata-700030
            </p>
          </div>
        </div>

        {/* Drop-off Address */}
        <div className="flex items-center gap-3 p-3 border-b border-gray-200">
          <i className="ri-map-pin-fill text-xl text-[#600D1C]"></i>
          <div>
            <h3 className="text-sm font-semibold text-gray-800">191, 7 Point</h3>
            <p className="text-xs text-gray-600">
              Marina garden court, Park Circus, Ballygunge, Kolkata, West Bengal 700017
            </p>
          </div>
        </div>

        {/* Payment Details */}
        <div className="flex items-center gap-3 p-3">
          <i className="ri-money-rupee-circle-fill text-xl text-[#600D1C]"></i>
          <div>
            <h3 className="text-sm font-semibold text-gray-800">₹ 214.76</h3>
            <p className="text-xs text-gray-600">Cash Payment</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-4">
        <button
          onClick={() => {
            props.setConfirmRidePanel(true);
          }}
          className="w-full bg-gradient-to-r from-green-600 to-green-800 text-white font-semibold p-2 rounded-lg"
        >
          Accept
        </button>
        <button
          onClick={() => props.setRidePopupPanel(false)}
          className="mt-2 w-full bg-gradient-to-r from-red-700 to-red-800 text-white font-semibold p-2 rounded-lg"
        >
          Decline
        </button>
      </div>
    </div>
  );
};

export default RidePopupPanel;
