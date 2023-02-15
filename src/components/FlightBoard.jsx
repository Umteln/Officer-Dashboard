import React from 'react'
import { FaPlaneArrival }from 'react-icons/fa';
const FlightBoard = () => {
  return (
    <div>
        <ul className=''>
          <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer'>
            <div className='bg-blue-100 rounded-lg p-3'>
                <FaPlaneArrival  className='text-blue-800'/>
            </div>
            <div className='flex'>

                <div className='pl-4'>
                <p className='text-gray-800 font-bold'>Flight Number</p>
                <p className='text-gray-400 text-sm'>Airline Code</p>
            </div>
            </div>
          </li>
        </ul>
    </div>
  )
}

export default FlightBoard