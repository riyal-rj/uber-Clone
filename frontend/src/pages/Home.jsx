import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import { Link, useNavigate } from 'react-router-dom';
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfirmRide';
import LookingForCaptain from '../components/LookingForCaptain';
import WaitingForCaptain from '../components/WaitingForCaptain';
const Home = () => {

  const [pickUp, setPickUp] = useState('');
  const [dropOff, setDropOff] = useState('');

  const [panel, setPanel] = useState(false);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const [rideFound, setrideFound] = useState(false);
  const [waitingForCaptain, setWaitingForCaptain] = useState(false);

  const panelRef = useRef(null);
  const panelClose = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const rideFoundRef = useRef(null);
  const waitingForCaptianRef = useRef(null);


  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  }

  useGSAP(() => {
    gsap.to(panelRef.current, {
      height: panel ? '70%' : 0,
    },
      gsap.to(panelClose.current, {
        display: panel ? 'block' : 'none',
      }
      ))
  }, [panel])

  useGSAP(() => {
    gsap.to(vehiclePanelRef.current, {
      transform: vehiclePanel ? 'translateY(0)' : 'translateY(100%)',
    })
  }, [vehiclePanel])

  useGSAP(() => {
    gsap.to(confirmRidePanelRef.current, {
      transform: confirmRidePanel ? 'translate(0)' : 'translateY(100%)',
    })
  }, [confirmRidePanel])

  useGSAP(() => {
    gsap.to(rideFoundRef.current, {
      transform: rideFound ? 'translate(0)' : 'translateY(100%)',
    })
  }, [rideFound])

  useGSAP(() => {
    gsap.to(waitingForCaptianRef.current, {
      transform: waitingForCaptain ? 'translate(0)' : 'translateY(100%)',
    })
  }, [waitingForCaptain])

  return (
    <div className='relative overflow-hidden'>
      <h5 className="absolute top-0 right-2 p-1 cursor-pointer bg-white border:rounded"
                onClick={() => {
                    navigate('/user-profile');
                }}
            >
        <i className="text-lg font-medium ri-home-5-line text-gray-700"></i>
      </h5>
      <img className='w-16 absolute left-5 top-5' src="/user-logo.png" alt="" />
      <div className='h-screen w-screen'>
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
      <div className=' flex flex-col justify-end h-screen absolute top-0 w-full '>
        <div className='h-[30%] p-6 bg-white relative'>
          <h5 ref={panelClose} onClick={() => setPanel(false)}
            className='absolute  right-6 top-6 text-2xl '>
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className='text-3xl font-semibold'>Find a trip</h4>
          <form onSubmit={(e) => { submitHandler(e) }} >
            <div className="line absolute h-16 w-1 top-[43%] left-10 bg-gray-800 rounded-full"></div>
            <input onClick={() => setPanel(true)}
              value={pickUp} onChange={(e) => setPickUp(e.target.value)}
              className='bg-[#eee] px-12 py-2 text-lg  w-full rounded-lg mt-5'
              type="text" placeholder='Add a pick up location' />
            <input onClick={() => setPanel(true)}
              value={dropOff} onChange={(e) => setDropOff(e.target.value)}
              className='bg-[#eee] px-12 py-2 text-lg  w-full rounded-lg mt-3'
              type="text" placeholder='Add a drop off location' />
          </form>
        </div>
        <div ref={panelRef} className=' bg-white h-0' >
          <LocationSearchPanel
            pickUp={pickUp}
            dropOff={dropOff}
            setPanel={setPanel}
            setVehiclePanel={setVehiclePanel}
          />
        </div>
      </div>
      <div ref={vehiclePanelRef}
        className='fixed w-full z-10 bottom-0 bg-white px-3 py-6 overflow-scroll translate-y-full'>
        <VehiclePanel
          setConfirmRidePanel={setConfirmRidePanel}
          setVehiclePanel={setVehiclePanel}
        />
      </div>
      <div ref={confirmRidePanelRef}
        className='fixed w-full z-10 bottom-0 bg-white px-3 py-6 overflow-scroll translate-y-full'>
        <ConfirmRide
          setrideFound={setrideFound}
          setConfirmRidePanel={setConfirmRidePanel}
        />
      </div>
      <div ref={rideFoundRef}
        className='fixed w-full z-10 bottom-0 bg-white px-3 py-6 overflow-scroll translate-y-full'>
        <LookingForCaptain
          setrideFound={setrideFound}
          setVehiclePanel={setVehiclePanel}
        />
      </div>
      <div ref={waitingForCaptianRef}
        className='fixed w-full z-10 bottom-0 bg-white px-3 py-6 overflow-scroll translate-y-full'>
        <WaitingForCaptain
          setrideFound={setrideFound}
          waitingForCaptain={waitingForCaptain}
          setWaitingForCaptain={setWaitingForCaptain}
        />
      </div>
    </div>
  )
}

export default Home