import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { FaEthereum } from 'react-icons/fa'
import { IoNotificationsOutline } from 'react-icons/io5'
import { FiChevronDown } from 'react-icons/fi'
import 'animate.css';

export default function Navbar() {
    return (
        <div className='flex gap-20'>
            <div className='relative'>
                <input type="text" placeholder='Search by creator or collection' className='w-[550px] border rounded-2xl text-center p-5 placeholder:text-[#A1A5B6] text-xl custom-border custom-bg' />
                <BiSearch className='absolute -translate-y-12 translate-x-5 w-10 h-6 text-[#A1A5B6]' />
            </div>
            <div className='flex gap-5 text-xl text-white '>
                <button className='flex border items-center rounded-2xl gap-2 w-fit px-5 custom-border custom-bg'>
                    <FaEthereum />
                    <span> 3,25 ETH</span>
                </button>
                <div className='animate__animated animate__backInDown border rounded-2xl flex items-center px-5 custom-border custom-bg'>
                    <IoNotificationsOutline className='w-10 h-8' />
                </div>
                <button className='border rounded-2xl px-10 flex items-center custom-border custom-bg'>
                    Create
                </button>
                <button className='border rounded-2xl px-10 flex items-center custom-border custom-bg'>
                    Connect Wallet
                </button>
            </div>
            <div className='flex items-center'>
                <img src="./Images/Profile.svg" alt="" className='w-16' />
                <div className='flex flex-col text-left pl-4 pt-1'>
                    <span className='text-[#E2E4E9] text-xl'> Aayush Gandhi</span>
                    <span className='text-[#93C5FD] text-base'> aayushgandhi21@gmail.com</span>
                </div>
                <FiChevronDown className='ml-10 w-10 h-8' />
            </div>
        </div>
    )
}
