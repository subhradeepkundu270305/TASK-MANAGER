import React from 'react'
import { FaFileAlt } from "react-icons/fa";

const Navbar = ({ showAll, showPending, pendingCount }) => {
  return (
    <nav className='flex flex-col md:flex-row justify-between items-center bg-violet-700 text-white py-3 px-8 shadow-lg'>
        <div className='logo flex items-center gap-2 cursor-pointer mb-3 md:mb-0' onClick={showAll}>
            <FaFileAlt className='text-2xl' />
            <span className='font-bold text-xl'>Task Manager</span>
        </div>
        <ul className='flex gap-4'>
            <li onClick={showAll} className='bg-violet-500 hover:bg-violet-600 text-white px-4 py-2 rounded-lg cursor-pointer transition-all duration-300 shadow-md font-bold text-sm md:text-base'>HOME</li>
            <li onClick={showPending} className='bg-violet-500 hover:bg-violet-600 text-white px-4 py-2 rounded-lg cursor-pointer transition-all duration-300 shadow-md font-bold flex items-center text-sm md:text-base'>
              MY TASKS
              {pendingCount > 0 && <span className='bg-red-500 text-white rounded-full px-2 py-0.5 text-xs ml-2 font-bold'>{pendingCount}</span>}
            </li>
        </ul>
    </nav>
  )
}

export default Navbar