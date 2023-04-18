import React, { useEffect, useState } from 'react'
import { BsChevronRight } from 'react-icons/bs'
import Graph from './Graph'
import { UserData } from './GraphData'

export default function Profile() {

    // const [month, setMonth] = useState("january");
    const [data, setData] = useState(UserData.filter(monthlyData => monthlyData.month === "january")[0]);

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("january");


    const [userData, setUserData] = useState()

    const handleOptionClick = (option) => {
        setSelectedOption(option);

        setData(UserData.filter(monthlyData => monthlyData.month === option)[0])

        setIsOpen(false);
    };

    useEffect(() => {

        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        const gradient = ctx.createLinearGradient(0, 0, 0, 250);
        gradient.addColorStop(0, "#47E2EC");
        gradient.addColorStop(0.4932, "#5C98DF");
        gradient.addColorStop(1, "#A314D5");

        setUserData({
            labels: data.data.map((data) => data.week),
            datasets: [{
                label: "Users Gained",
                data: data.data.map((data) => data.revenue),
                backgroundColor: gradient,
                // "linear-gradient(165.54deg, #47E2EC - 9.83%, #5C98DF 49.32%, #A314D5 110.99%)",
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                barThickness: 20,
                borderRadius: 10,

            }]
        })
    }, [data])

    return (
        <div className='border rounded-2xl w-[480px] py-10 px-5'>
            <div className='text-center'>
                <span className='text-5xl'> My Profile</span>
                <img src="./Images/MyProfile.svg" alt="" className='m-auto py-10' />
                <span className='text-3xl'>Aayush Gandhi</span>
            </div>
            <div className='flex justify-between text-xl py-5 text-center'>
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
                        <img src="./Images/Ethereum.svg" alt="" className='w-14' />
                        <span className='text-2xl font-bold'>4,668 ETH </span>
                    </div>
                    <button className='flex items-center text-xl'>Add <BsChevronRight /> </button>
                </div>
            </div>
            <div>
                <div className='flex justify-between py-5'>
                    <span>Revenue</span>
                    <div className="relative">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {selectedOption || "Select an option"}
                        </button>
                        {isOpen && (
                            <ul className='absolute bg-white right-5 w-24 px-10'>
                                <li onClick={() => handleOptionClick("january")}>January</li>
                                <li onClick={() => handleOptionClick("february")}>February</li>
                                <li onClick={() => handleOptionClick("march")}>March</li>
                                <li onClick={() => handleOptionClick("april")}>April</li>
                                <li onClick={() => handleOptionClick("may")}>May</li>
                                <li onClick={() => handleOptionClick("june")}>June</li>
                                <li onClick={() => handleOptionClick("july")}>July</li>
                                <li onClick={() => handleOptionClick("august")}>August</li>
                                <li onClick={() => handleOptionClick("september")}>September</li>
                                <li onClick={() => handleOptionClick("october")}>October</li>
                                <li onClick={() => handleOptionClick("november")}>November</li>
                                <li onClick={() => handleOptionClick("december")}>December</li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
            <div className='border rounded-3xl w-[90%] m-auto p-4'>
                {userData && <Graph chartData={userData} />}
            </div>
            <div className='pt-5'>
                <div className='flex justify-between'>
                    <span>Recent Activity</span>
                    <span>See All</span>
                </div>
                <div>
                    <div className='flex items-center mt-5 bg-[#212760] rounded-3xl p-2 text-white'>
                        <div>
                            <img src="./Images/Activity1.png" alt="" className='w-24' />
                        </div>
                        <div className='flex flex-col'>
                            <span>Crystal_Art</span>
                            <span>by @rudepixxel</span>
                        </div>
                        <div className='flex flex-col'>
                            <span>New Bid</span>
                            <span>6.25 ETH</span>
                            <span>3m ago</span>
                        </div>
                    </div>
                    <div className='flex items-center mt-5 bg-[#212760] rounded-3xl p-2'>
                        <div>
                            <img src="./Images/Activity2.png" alt="" className='w-24' />
                        </div>
                        <div>
                            <span>Crystal_Art</span>
                            <span>by @rudepixxel</span>
                        </div>
                        <div>
                            <span>New Bid</span>
                            <span>6.25 ETH</span>
                            <span>3m ago</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
