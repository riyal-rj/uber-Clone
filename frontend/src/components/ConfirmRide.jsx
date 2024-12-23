import React from 'react'

const ConfirmRide = (props) => {
  return (
    <div>
     <h5 className='p-3 text-center absolute top-0'
                onClick={() => props.setConfirmRidePanel(false)}>
                <i className=" text-xl text-gray-600 ri-arrow-down-wide-fill"></i></h5>
            <h3 className='px-3 py-1 text-2xl font-semibold mb-5'>Confirm Your Ride</h3>
            <div className='flex  flex-col justify-between items-center'>
            <img className='h-56'src="/confirm-ride.gif" alt="" />
            <div className='w-full gap-5'>
                <div className='flex items-center gap-4 border-b-2 rounded p-3'>
                <i className=" text-xl ri-map-pin-user-fill"></i>
                <div >
                  <h3 className='text-lg font-semibold'>
                    104/A/2
                  </h3>
                  <p className='text-base -mt-1 text-gray-700'> Purba Sinthee Road, DumDum Kolkata-700030</p>
                </div>
                </div>
                <div  className='flex items-center gap-4 border-b-2 border-t-2 rounded p-3'>
                <i className="text-xl ri-map-pin-fill"></i>
                <div >
                  <h3 className='text-lg font-semibold'>
                  191, 7 Point
                  </h3>
                  <p className='text-base -mt-1 text-gray-700'>Marina garden court, Park Circus, Ballygunge, Kolkata, West Bengal 700017</p>
                </div>
                </div>
                <div className='flex items-center gap-4  rounded p-3'>
                <i className="ri-money-rupee-circle-fill"></i>
                <h3 className='text-lg font-semibold'>
                  Cash Payment
                </h3>
                <p className='text-base font-semibold'>₹193.20</p>
                <i className="ri-cash-line"></i>
                </div>
            </div>
            <button onClick={()=>{
                 props.setrideFound(true);
                 props.setConfirmRidePanel(false);
            }}
            className='w-full border font-semibold rounded-lg text-white text-xl bg-green-800 p-2'>Confirm</button>
            </div>
    </div>
  )
}

export default ConfirmRide