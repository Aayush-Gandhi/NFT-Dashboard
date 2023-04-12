import React from 'react'
import { BiLogOut } from 'react-icons/bi'

export default function SideBar() {
    return (
        <div>
            <div className='border rounded-2xl w-fit p-3 h-[92vh] flex flex-col divide-y-2 py-10'>

                <div>
                    <div className='flex flex-col items-center pb-8 gap-y-16'>
                        <div className='max-h-8'>
                            <img src="./Images/Vector.svg" alt=""  className='w-16'/>
                        </div>
                        <div>
                            <img src="./Images/Home.svg" alt=""   className='w-16'/>
                        </div>
                    </div>
                    <div className='flex flex-col pb-16 items-center gap-y-12'>
                        <img src="./Images/Mail.svg" alt=""   className='w-8'/>
                        <img src="./Images/Cart.svg" alt=""   className='w-8'/>
                        <img src="./Images/Activity.svg" alt=""   className='w-8'/>
                        <img src="./Images/Clock.svg" alt=""   className='w-8'/>
                    </div>
                </div>

                <div className='flex flex-col justify-between h-full pt-16'>
                    <div className='flex flex-col items-center gap-y-12'>
                        <img src="./Images/Wallet.svg" alt=""   className='w-8'/>
                        <img src="./Images/User.svg" alt=""   className='w-8'/>
                        <img src="./Images/Settings.svg" alt=""   className='w-8'/>
                    </div>
                    <div>
                        <BiLogOut className='w-12 h-12 text-[#02AAB0]' />
                    </div>
                </div>

            </div>
        </div>
    )
}
