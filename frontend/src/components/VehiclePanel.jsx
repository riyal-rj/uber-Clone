import React from 'react'

const VehiclePanel = (props) => {
    return (
        <div>
            <h5 className='p-3 text-center absolute top-0'
                onClick={() => props.setVehiclePanel(false)}>
                <i className=" text-xl text-gray-600 ri-arrow-down-wide-fill"></i></h5>
            <h3 className='px-3 py-1 text-2xl font-semibold mb-5'>Select your vehicle</h3>
            <div onClick={()=>props.setConfirmRidePanel(true)}
                className=' w-full mb-2 justify-between items-center flex border-2 active:border-black bg-gray-200 p-3 rounded-xl'>
                <img className='h-10' src="/car.webp" alt="" />
                <div className='ml-2 w-1/2'>
                    <h4 className='font-medium text-base'>Go Sedan
                        <span>
                            <i className="ri-user-3-fill"></i>4
                        </span>
                    </h4>
                    <h5 className='font-medium text-sm'>2 mins away</h5>
                    <p className='font-normal text-xs text-gray-700'>Affordable, compact rides</p>
                </div>
                <h2 className='text-lg font-semibold'>₹ 193.20</h2>
            </div>
            <div onClick={()=>props.setConfirmRidePanel(true)}
                className=' w-full mb-2 justify-between items-center flex border-2 active:border-black bg-gray-200 p-3 rounded-xl'>
                <img className='h-10' src="/car-white.webp" alt="" />
                <div className='ml-2 w-1/2'>
                    <h4 className='font-medium text-base'>UberGo
                        <span>
                            <i className="ri-user-3-fill"></i>4
                        </span>
                    </h4>
                    <h5 className='font-medium text-sm'>2 mins away</h5>
                    <p className='font-normal text-xs text-gray-700'>Affordable, compact rides</p>
                </div>
                <h2 className='text-lg font-semibold'>₹ 193.20</h2>
            </div>
            <div onClick={()=>props.setConfirmRidePanel(true)}
                className=' w-full mb-2 justify-between items-center flex border-2 active:border-black bg-gray-200 p-3 rounded-xl'>
                <img className='h-10' src="/bike.webp" alt="" />
                <div className='ml-2 w-1/2'>
                    <h4 className='font-medium text-base'>Moto
                        <span>
                            <i className="ri-user-3-fill"></i>1
                        </span>
                    </h4>
                    <h5 className='font-medium text-sm'>4 mins away</h5>
                    <p className='font-normal text-xs text-gray-700'>Affordable, motorcycle rides</p>
                </div>
                <h2 className='text-lg font-semibold'>₹ 95.20</h2>
            </div>
            <div onClick={()=>props.setConfirmRidePanel(true)}
                className=' w-full mb-2 justify-between items-center flex border-2 active:border-black bg-gray-200 p-3 rounded-xl'>
                <img className='h-10' src="/toto.png" alt="" />
                <div className='ml-2 w-1/2'>
                    <h4 className='font-medium text-base'>Toto
                        <span>
                            <i className="ri-user-3-fill"></i>4
                        </span>
                    </h4>
                    <h5 className='font-medium text-sm'>2 mins away</h5>
                    <p className='font-normal text-xs text-gray-700'>TAXI WITHOUT THE HUSTLE</p>
                </div>
                <h2 className='text-lg font-semibold'>₹ 113.20</h2>
            </div>
        </div>
    )
}

export default VehiclePanel