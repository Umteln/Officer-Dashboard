import React from 'react';
import { FaPlaneArrival } from 'react-icons/fa';

const Flights = () => {
	return (
		<div className='bg-gray-100 min-h-screen'>
			<div className='flex justify-between p-4'>
				<h2>Employees</h2>
				<h2>Welcome Back, Amera</h2>
			</div>
			<div className='pl-4'>
				{/* board legends */}
				<div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
					<div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
						<span> Flight</span>
						<span className='sm:text-left text-right'>ETA</span>
						<span className='hidden md:grid'>PAX Count</span>
						<span className='hidden md:grid'>Status</span>
					</div>
					<ul>
						{flightData.map((flight, index) => (
							<li
								key={index}
								className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 grid-cols-2 items-center justify-between cursor-pointer'
							>
								<div className='flex items-center'>
									<div className='bg-blue-100 rounded-lg p-3'>
										<FaPlaneArrival className='text-blue 100' />
									</div>
									<div className='pl-4 '>
										<p className='text-gray-800 font-bold'>
											{' '}
											{flight.airlineCode + ' ' + flight.number}{' '}
										</p>
										<p className='text-gray-600 sm:text-left text-right'>
											{flight.flightDate}
										</p>
									</div>
								</div>

								<p className='hidden md:flex'>{flight.eta}</p>
								<p className='hidden md:flex'>{flight.paxCount}</p>
								<div className='sm:flex justify-between items-center'>
									<p className='text-gray-600 sm:text-left text-right'>
										<span className={
											flight.status === 'current'
											? 'bg-green-200 p-2 rounded-lg'
											: flight.status === 'delayed'
											? 'bg-yellow-200 p-2 rounded-lg'
											: flight.status === 'cancelled'
											? 'bg-red-200 p-2 rounded-lg'
											: ''
										}
										>
										   {flight.status}
										</span>
									</p>
									<div className='bg-blue-100 rounded-lg p-3'>
										<AiFillEdit className='text-blue-800' />
									</div>
									<div className='bg-blue-100 rounded-lg p-3'>
										<AiFillDelete className='text-blue-800' />
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Flights;
