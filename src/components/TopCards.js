import React from 'react';
import { FaPlaneArrival }from 'react-icons/fa';

const TopCards = () => {
	return (
        <div className='grid lg:grid-cols-6 gap-4 p-4'>
			<div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
				<div className='flex flex-col w-full pb-4'>
					<p className='text-2xl font-bold'>0700 - 1500</p>
					<p className='text-gray-600 '>Today&apos;s Schedule</p>
				</div>
			</div>
            <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
				<div className='flex flex-col w-full pb-4'>
					<p className='text-2xl font-bold'>Pending: (3)</p>
					<p className='text-gray-600 '>Messages</p>
				</div>
			</div>
            <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
				<div className='flex flex-col w-full pb-4'>
					<p className='text-2xl font-bold'>SW 322</p>
					<p className='text-gray-600 '>Next Flight</p>
				</div>
                <div className='bg-blue-100 rounded-lg my-4 p-3  inline-block'>
                <FaPlaneArrival  className='text-blue-800' size={20}/>
            </div>
            <div className='pl-4'>
                <p className='text-gray-800 text-lg font-bold'>1330</p>
                <p className='text-gray-400 text-sm'>Arrival Time</p>
            </div>
                
			</div>
        </div>
    )  
}
export default TopCards;
