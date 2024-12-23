import React from 'react'

const LocationSearchPanel = (props) => {
    return (
        <div>
            <div onClick={()=>{
                props.setVehiclePanel(true);
                props.setPanel(false);
                }} 
                className='flex gap-3 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start'>
                <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'>
                    <i className="ri-map-pin-fill"></i></h2>
                <h4 className='font-medium'>
                DIAMOND PLAZA, 68, Jessore Rd, Shyam Nagar, Satgachi, Kolkata, West Bengal 700055
                </h4>
            </div>
            <div onClick={()=>{
                props.setVehiclePanel(true);
                }} 
                className='flex gap-3 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start'>
                <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'>
                    <i className="ri-map-pin-fill"></i></h2>
                <h4 className='font-medium'>
                191, 7 Point, Marina garden court, Park Circus, Ballygunge, Kolkata, West Bengal 700017
                </h4>
            </div>
            <div onClick={()=>{
                props.setVehiclePanel(true);
                }} 
                className='flex gap-3 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start'>
                <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'>
                    <i className="ri-map-pin-fill"></i></h2>
                <h4 className='font-medium'>
                1, Ghoshpara Rd, Barrackpore, West Bengal 700120
                </h4>
            </div>
            <div onClick={()=>{
                props.setVehiclePanel(true);
                }} 
                className='flex gap-3 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start'>
                <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'>
                    <i className="ri-map-pin-fill"></i></h2>
                <h4 className='font-medium'>
                3, Dinu Rakshit Ln, Sovabazar, Beniatola, Kolkata, West Bengal 700005
                </h4>
            </div>
            <div onClick={()=>{
                props.setVehiclePanel(true);
                }} 
                className='flex gap-3 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start'>
                <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'>
                    <i className="ri-map-pin-fill"></i></h2>
                <h4 className='font-medium'>
                156, Jheel Bagan, Jhilbagan, South Dumdum, Kolkata, West Bengal 700030
                </h4>
            </div>
        </div>
    )
}

export default LocationSearchPanel