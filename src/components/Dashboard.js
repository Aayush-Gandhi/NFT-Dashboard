import React from 'react'
import SideBar from './SideBar'
import Navbar from './Navbar'
import Profile from './Profile'
import Auction from './Auction'
import TopSellers from './TopSellers'
import HotBids from './HotBids'

export default function Dashboard() {
  return (
    <div>
        <div className='flex lg:gap-10'>
            <div>
                <SideBar />
            </div>
            <div className='relative w-[100%]'>
                <Navbar />
                <Auction/>
                <TopSellers />
                <HotBids />
            </div>
            <div>
                <Profile />
            </div>
        </div>
    </div>
  )
}
