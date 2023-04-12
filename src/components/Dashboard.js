import React from 'react'
import SideBar from './SideBar'
import Navbar from './Navbar'
import Profile from './Profile'

export default function Dashboard() {
  return (
    <div>
        <div className='flex gap-20'>
            <div>
                <SideBar />
            </div>
            <div>
                <Navbar />
            </div>
            <div>
                <Profile />
            </div>
        </div>
    </div>
  )
}
