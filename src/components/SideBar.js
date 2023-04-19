import React from 'react'
import { BiLogOut } from 'react-icons/bi'
import { FiMail, FiClock, FiUsers, FiSettings } from 'react-icons/fi'
import { IoCartOutline } from 'react-icons/io5'
import { MdOutlineMonitorHeart } from 'react-icons/md'
import { CiWallet } from 'react-icons/ci'

export default function SideBar() {
    return (
        <div>
            <div className='border rounded-2xl w-fit p-3 h-[92vh] flex flex-col divide-y-2 py-10'>

                <div>
                    <div className='flex flex-col items-center pb-10 gap-y-16'>
                        <div className='max-h-8'>
                            <img src="./Images/Vector.svg" alt="" className='w-16' />
                        </div>
                        <div className='bg-[#303069c4] border-r-8 border-red-500 '>
                            <img src="./Images/Home.svg" alt="" className='w-16 ' />
                        </div>
                    </div>
                    <div className='flex flex-col pb-16 items-center gap-y-16'>
                            <FiMail size={32} className='mail text-[#00CDAC] ' />
                        <IoCartOutline size={38} className='cart text-[#00CDAC]' />
                        <MdOutlineMonitorHeart size={35} className='cart text-[#00CDAC]' />
                        <FiClock size={32} className='cart text-[#00CDAC]' />
                    </div>
                </div>

                <div className='flex flex-col justify-between h-full pt-16'>
                    <div className='flex flex-col items-center gap-y-12'>
                        <CiWallet size={35} className='cart text-[#00CDAC]' />
                        <FiUsers size={32} className='cart text-[#00CDAC]' />
                        <FiSettings size={32} className='cart text-[#00CDAC]' />
                    </div>
                    <div className=''>
                        <BiLogOut className='w-14 h-10 text-[#02AAB0]' />
                    </div>
                </div>

            </div>
        </div>
    )
}
