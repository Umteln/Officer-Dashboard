import React from 'react';
import FlightBoard from './FlightBoard';

const FlightContainer = () => {
	return (
    <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white'>
       <FlightBoard/>
    </div>
    )
};

export default FlightContainer;
