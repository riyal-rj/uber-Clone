import React from 'react';

const CaptainDetails = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      {/* Header Section: Captain Details */}
      <div className="flex items-center justify-between mb-6 border bg-gray-100">
        <div className="flex items-center gap-3 ">
          <img
            className="h-12 w-12 rounded-full object-cover border-2 border-[#600D1C]"
            src="/defualt.jpg"
            alt="Captain"
          />
          <h4 className="text-lg font-semibold capitalize text-gray-800">
            Tej Kumar
          </h4>
        </div>
        <div className="text-right">
          <h4 className="text-xl font-bold text-[#600D1C]">₹1295.20</h4>
          <p className="text-sm text-gray-600">Earned</p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="p-4 bg-gray-100 rounded-xl flex justify-around items-center gap-5">
        <div className="text-center">
          <i className="text-4xl text-[#600D1C] mb-2 ri-hourglass-fill"></i>
          <h5 className="text-lg font-semibold text-gray-800">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
        <div className="text-center">
          <i className="text-4xl text-[#600D1C] mb-2 ri-speed-up-line"></i>
          <h5 className="text-lg font-semibold text-gray-800">12</h5>
          <p className="text-sm text-gray-600">Rides Completed</p>
        </div>
        <div className="text-center">
          <i className="text-4xl text-[#600D1C] mb-2 ri-star-smile-fill"></i>
          <h5 className="text-lg font-semibold text-gray-800">4.8</h5>
          <p className="text-sm text-gray-600">Average Rating</p>
        </div>
      </div>
    </div>
  );
};

export default CaptainDetails;
