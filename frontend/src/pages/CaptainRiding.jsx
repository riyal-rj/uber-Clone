import { useGSAP } from '@gsap/react'
import React, { useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import gsap from 'gsap'
import FinishRide from '../components/FinishRide'
const CaptainRiding = () => {

    const [finishRidePanel, setFinishRidePanel] = useState(false)
    const finishRidePanelRef = useRef(null)
    // const location = useLocation()
    // const rideData = location.state?.ride

    useGSAP(() => {
        gsap.to(finishRidePanelRef.current, {
          transform: finishRidePanel ? 'translateY(0)' : 'translateY(100%)',
        })
      }, [finishRidePanel])

    return (
        <div className='h-screen relative flex flex-col justify-end'>

            <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
                <img className='w-16' src="captain-logo.png" alt="" />
                <Link to='/captainHome' className=' h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                    <i className="text-2xl text-[#600D1C] font-medium ri-logout-box-r-line"></i>
                </Link>
            </div>

            {/* <div className='h-1/5 p-6 flex items-center justify-between relative bg-[#bf6875]   pt-10'
                onClick={() => {
                    setFinishRidePanel(true)
                }}
            >
                <h5 className='p-1 text-center w-[90%] absolute top-0' onClick={() => {

                }}><i className="text-3xl text-gray-800 ri-arrow-up-wide-line"></i></h5>
                <h4 className='text-xl font-semibold'>{'4 KM away'}</h4>
                <button className=' bg-white text-[#600D1C] font-bold text-lg p-3 px-10 rounded-lg'>Complete Ride</button>
            </div> */}

            <div
                className="h-1/5 p-6 flex items-center justify-between bg-white border-t border-x-gray-500 relative"
                onClick={() => {
                    setFinishRidePanel(true);
                }}
            >
                {/* Slide-up Icon */}
                <h5
                    className="absolute top-0 left-0 w-full text-center p-1"
                    onClick={() => { }}
                >
                    <i className="text-3xl text-gray-800 ri-arrow-up-wide-line"></i>
                </h5>

                {/* Ride Info */}
                <div className="flex flex-col items-center ">
                    <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium text-gray-800">{'12 min'}</span>
                        <i className="ri-user-fill text-base text-[#600D1C]"></i>
                        <span className="text-sm font-medium text-gray-800">{'4 KM away'}</span>
                    </div>
                    <p className="text-xs text-gray-500">Dropping off Park Circus</p>
                </div>

                {/* Complete Ride Button */}
                <button className="bg-[#600D1C] text-white font-bold text-lg py-2 px-4 rounded-lg shadow-md hover:bg-[#4e0a17] transition-all">
                    Complete Ride
                </button>
            </div>


            <div ref={finishRidePanelRef} className='fixed w-full z-[500] bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
                <FinishRide 
                    setFinishRidePanel={setFinishRidePanel}
                />
            </div>

            {/*Live Tracking */}
            <div className='h-screen fixed w-screen top-0 z-[-1]'>
                <img className='h-full w-full object-cover' src="map-demo.gif" alt="" />
            </div>

        </div>
    )
}

export default CaptainRiding;