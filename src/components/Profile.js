import React from 'react'
import {BsChevronRight} from 'react-icons/bs'

export default function Profile() {
    return (
        <div className='border rounded-2xl w-[480px] py-20 px-5'>
            <div className='text-center'>
                <span className='text-5xl'> My Profile</span>
                <img src="./Images/MyProfile.svg" alt="" className='m-auto py-10'/>
                <span className='text-3xl'>Aayush Gandhi</span>
            </div>
            <div className='flex justify-between text-xl py-10'>
                <div className='flex flex-col'>
                    <button className='border rounded-2xl py-4 px-5 '> 120 </button>
                    Asset
                </div>
                <div className='flex flex-col'>
                    <button className='border rounded-2xl py-4 px-5 '> 10K </button>
                    Followers
                </div>
                <div className='flex flex-col'>
                    <button className='border rounded-2xl py-4 px-5 '> 70K </button>
                    Likes
                </div>
                <div className='flex flex-col'>
                    <button className='border rounded-2xl py-4 px-5 '> 60 </button>
                    Bidding
                </div>
            </div>
            <div className='text-left space-y-5'>
                <span className='text-2xl font-bold'> Your Balance </span>
                <div className='flex justify-between p-4 border rounded-2xl'>
                    <div className='flex items-center gap-5'>
                        <img src="./Images/Ethereum.svg" alt="" className='w-14'/>
                        <span className='text-2xl font-bold'>4,668 ETH </span>
                    </div>
                    <button className='flex items-center text-xl'>Add <BsChevronRight /> </button>
                </div>   
            </div>
            <div>
                <div className='flex justify-between py-10'>
                    <span>Revenue</span>
                    <span>This Month</span>
                </div>
            </div>
        </div>
    )
}
