import React from 'react';

const LookingForCaptain = (props) => {
  return (
    <div className="relative p-4 bg-white rounded-lg shadow-sm max-w-lg mx-auto">
      {/* Close Button */}
      <h5
        className="p-2 text-center absolute top-0 right-0 cursor-pointer"
        onClick={() => props.setVehiclePanel(false)}
      >
        <i className="text-xl text-gray-600 ri-arrow-down-wide-fill"></i>
      </h5>

      {/* Header */}
      <h3 className="text-2xl font-semibold text-center mb-2">Looking For Your Captain...</h3>

      {/* Content Section */}
      <div className="flex flex-col items-center space-y-4">
        {/* Animated Image */}
        <img className="h-48 object-contain" src="/looking-for-driver.gif" alt="Looking for driver" />

        {/* Info Section */}
        <div className="w-full space-y-4">
          {/* Pickup Address */}
          <div className="flex items-center gap-3 border-b-2 pb-2">
            <i className="text-xl text-gray-600 ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-semibold">104/A/2</h3>
              <p className="text-sm text-gray-700">Purba Sinthee Road, DumDum Kolkata-700030</p>
            </div>
          </div>

          {/* Dropoff Address */}
          <div className="flex items-center gap-3 border-b-2 pb-2">
            <i className="text-xl text-gray-600 ri-map-pin-fill"></i>
            <div>
              <h3 className="text-lg font-semibold">191, 7 Point</h3>
              <p className="text-sm text-gray-700">Marina garden court, Park Circus, Ballygunge, Kolkata, West Bengal 700017</p>
            </div>
          </div>

          {/* Payment Information */}
          <div className="flex items-center gap-3 py-2 ">
            <i className="text-xl text-gray-600 ri-money-rupee-circle-fill"></i>
            <div className="flex-1">
              <h3 className="text-lg font-semibold">Cash Payment</h3>
              <p className="text-sm font-semibold text-gray-700">₹193.20</p>
            </div>
            <i className="text-xl text-gray-600 ri-cash-line"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LookingForCaptain;
