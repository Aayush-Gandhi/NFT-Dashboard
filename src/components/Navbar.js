import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { FaEthereum } from 'react-icons/fa'
import { IoNotificationsOutline } from 'react-icons/io5'
import { FiChevronDown } from 'react-icons/fi'
import 'animate.css';


export default function Navbar() {

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open)
    }

    const [size, setSize] = useState(false)
    const handleSize = () => {
        setSize(!size)
    }

    return (
        <div className=''>
            <div className='flex justify-between '>
                <div className='relative'>
                    <input type="text" placeholder='Search by creator or collection' className= {` border rounded-2xl text-center p-3 lg:p-5 placeholder:text-[#A1A5B6] text-white text-xl custom-border custom-bg sm:placeholder:text-sm lg:placeholder:text-2xl 
                    ${size? 'w-[250px] lg:w-[550px] absolute lg:static z-10':'w-[60px] lg:w-[550px]'}`} onClick={handleSize}/>
                    <BiSearch className='absolute -translate-y-10 lg:-translate-y-12 lg:translate-x-5 w-10 h-6 text-[#A1A5B6]' />
                </div>
                <div className='flex lg:gap-5 text-sm lg:text-xl text-white '>
                    <button className='flex lg:border items-center rounded-2xl gap-2 w-fit px-3 lg:px-5 custom-border custom-bg'>
                        <FaEthereum />
                        <span> 3,25 ETH</span>
                    </button>
                    <div className='animate__animated animate__backInDown lg:border rounded-2xl flex items-center px-3 lg:px-5 custom-border custom-bg'>
                        <IoNotificationsOutline className='w-10 h-8' />
                    </div>
                    <div className='hidden lg:flex gap-5'>
                        <button className='border rounded-2xl px-10 flex items-center custom-border custom-bg'>
                            Create
                        </button>
                        <button className='border rounded-2xl px-10 flex items-center custom-border custom-bg'>
                            Connect Wallet
                        </button>
                    </div>
                </div>
                <div className='flex items-center'>
                    <img src="./Images/Profile.svg" alt="" className='w-16' />
                    <div className='hidden lg:flex flex-col text-left pl-4 pt-1'>
                        <span className='text-[#E2E4E9] text-xl'> Aayush Gandhi</span>
                        <span className='text-[#93C5FD] text-base'> aayushgandhi21@gmail.com</span>
                    </div>
                    <FiChevronDown className='hidden lg:ml-10 text-white w-10 h-8'/>
                    <FiChevronDown className='lg:hidden` text-white w-10 h-8' onClick={handleClick} />

                    {
                        open ?
                            <div>
                                <div className='z-10 top-16 w-full h-full gap-8 px-[40%] py-6 absolute right-0 flex flex-col  bg-[#03032bec] text-white'>
                                    <span> My Profile </span>
                                    <span> Create </span>
                                    <span> Connect Wallet </span>
                                    <span> Logout </span>
                                </div>
                            </div>
                            : ''

                    }


                </div>
            </div>
        </div>
    )
}
