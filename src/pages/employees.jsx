import React from 'react';
import { BsPersonFill } from 'react-icons/bs';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { employeeData } from '@/utils/employeeData';

const Employees = () => {
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
						<span> Name</span>
						<span className='sm:text-left text-right'>Email</span>
						<span className='hidden md:grid'>Phone</span>
						<span className='hidden md:grid'>Update Employee</span>
					</div>
					<ul>
						{employeeData.map((employee, index) => (
							<li
								key={index}
								className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 grid-cols-2 items-center justify-between cursor-pointer'
							>
								<div className='flex items-center'>
									<div className='bg-blue-100 rounded-lg p-3'>
										<BsPersonFill className='text-blue 100' />
									</div>
									<p className='pl-4 '>
										{' '}
										{employee.name.first + ' ' + employee.name.last}{' '}
									</p>
								</div>
								<p className='text-gray-600 sm:text-left text-right'>
									{employee.email}
								</p>
								<p className='hidden md:flex'>{employee.phone}</p>
								<div className='sm:flex hidden justify-between items-center'>
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

export default Employees;
