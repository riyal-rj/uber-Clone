import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
        <div className=' bg-cover  bg-center bg-[url(https://images.stockcake.com/public/7/f/3/7f3801ab-36b2-459a-9ef8-d86c65bb7d57_large/rainy-traffic-lights-stockcake.jpg)] h-screen pt-8 flex justify-between flex-col w-full'>
           <img  className='w-28 ml-16' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1200px-Uber_logo_2018.png" alt="" />
            <div className='bg-white px-3 py-3'>
                <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
                <Link className=' flex items-center justify-center w-full bg-black text-white py-4 rounded mt-5' to={"/userlogin"}>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Start;