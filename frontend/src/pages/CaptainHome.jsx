import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import RidePopupPanel from '../components/RidePopupPanel';
import CaptainAcceptRidePanel from '../components/CaptainAcceptRidePanel';
const CaptainHome = () => {

  const [ridePopupPanel, setRidePopupPanel] = useState(true);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);

  const ridePopupPanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);

  useGSAP(() => {
    gsap.to(ridePopupPanelRef.current, {
      transform: ridePopupPanel ? 'translateY(0)' : 'translateY(100%)',
    })
  }, [ridePopupPanel])
  
  useGSAP(() => {
    gsap.to(confirmRidePanelRef.current, {
      transform: confirmRidePanel ? 'translateY(0)' : 'translateY(100%)',
    })
  }, [confirmRidePanel])
  
  
  return (
    <div className='h-screen'>
      <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
        <img className='w-16' src="/captain-logo.png" alt="" />
        <Link to='/captainHome' className=' h-10 w-10 bg-white flex items-center justify-center rounded-full'>
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className='h-3/5'>
        <img className='h-full w-full object-cover' src="/map-demo.gif" alt="" />

      </div>
      <div className='h-2/5 p-6'>
        <CaptainDetails />
      </div>
      <div ref={ridePopupPanelRef}
        className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
        <RidePopupPanel
          setRidePopupPanel={setRidePopupPanel}
          setConfirmRidePanel={setConfirmRidePanel} />
      </div>
      <div ref={confirmRidePanelRef}
        className='fixed w-full h-screen z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
          <CaptainAcceptRidePanel
            setConfirmRidePanel={setConfirmRidePanel}
            setRidePopupPanel={setRidePopupPanel}
          />
      </div>
    </div>
  )
}

export default CaptainHome