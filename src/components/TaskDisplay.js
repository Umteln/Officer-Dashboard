import React from 'react';
import { BiTask } from 'react-icons/bi';

export const TaskDisplay = () => {
	return (
    <div className='w-full col-span-1 relative lg:h-[70vh] h-[50] m-auto p-4 border rounded-lg bg-white overflow-scroll'>
      <h1 className=''>
        Task Reminder
      </h1>
      <div>
        <ul className=''>
          <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer'>
            <div className='bg-blue-100 rounded-lg p-3'>
                <BiTask  className='text-blue-800'/>
            </div>
            <div className='flex'>

                <div className='pl-4'>
                <p className='text-gray-800 font-bold'>Task Name</p>
                <p className='text-gray-400 text-sm'>Task Due Date</p>
            </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    )
};
