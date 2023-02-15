import Link from 'next/link';
import React from 'react';
import { RxDashboard, RxPerson, RxSketchLogo } from 'react-icons/rx';
import { MdOutlineNotes, MdOutlinePeople } from 'react-icons/md';
import { FiSettings } from 'react-icons/fi';
import { TbPlaneArrival } from 'react-icons/tb';
import Header from './Header';

const Sidebar = ({ children }) => {
	return (
		<div className='flex'>
			<div className='fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between'>
				<div className='flex flex-col items-center'>
					<Link href='/'>
						<div className='bg-blue-800 text-white p-3 rounded-lg inline-block'>
							<RxSketchLogo size={20} />
						</div>
					</Link>
					<span className='border-b-[1px] border-gray-200 w-full p-2'></span>
					<Link href='/Boards'>
						<div className='bg-blue-200 hover:bg-blue-300 cursor-pointer my-4 p-3 rounded-lg inline-block'>
							<RxDashboard size={20} />
						</div>
					</Link>
					<Link href='/schedule'>
						<div className='bg-blue-200 hover:bg-blue-300 cursor-pointer my-4 p-3 rounded-lg inline-block'>
							<RxPerson size={20} />
						</div>
					</Link>
					<Link href='/employees'>
						<div className='bg-blue-200 hover:bg-blue-300 cursor-pointer my-4 p-3 rounded-lg inline-block'>
							<MdOutlinePeople size={20} />
						</div>
					</Link>
					<Link href='/flights'>
						<div className='bg-blue-200 hover:bg-blue-300 cursor-pointer my-4 p-3 rounded-lg inline-block'>
							<TbPlaneArrival size={20} />
						</div>
					</Link>
					<Link href='/tasks'>
						<div className='bg-blue-200 hover:bg-blue-300 cursor-pointer my-4 p-3 rounded-lg inline-block'>
							<MdOutlineNotes size={20} />
						</div>
					</Link>
					<Link href='/settings'>
						<div className='bg-blue-200 hover:bg-blue-300 cursor-pointer my-4 p-3 rounded-lg inline-block'>
							<FiSettings size={20} />
						</div>
					</Link>
				</div>
			</div>
			<main className='ml-20 w-full '>{children}</main>
		</div>
	);
};

export default Sidebar;
