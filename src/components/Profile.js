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
        setUserData({
            labels: data.data.map((data) => data.week),
            datasets: [{
                label: "Users Gained",
                data: data.data.map((data) => data.userGain),
                backgroundColor: 'linear-gradient(165.54deg, #47E2EC - 9.83%, #5C98DF 49.32%, #A314D5 110.99%)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                
            }]
        })
}, [data])

return (
    <div className='border rounded-2xl w-[480px] py-20 px-5'>
        <div className='text-center'>
            <span className='text-5xl'> My Profile</span>
            <img src="./Images/MyProfile.svg" alt="" className='m-auto py-10' />
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
                    <img src="./Images/Ethereum.svg" alt="" className='w-14' />
                    <span className='text-2xl font-bold'>4,668 ETH </span>
                </div>
                <button className='flex items-center text-xl'>Add <BsChevronRight /> </button>
            </div>
        </div>
        <div>
            <div className='flex justify-between py-10'>
                <span>Revenue</span>
                <div className="dropdown">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {selectedOption || "Select an option"}
                    </button>
                    {isOpen && (
                        <ul className='absolute'>
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
        <div>

            {userData && <Graph chartData={userData} />}
        </div>
        {/* <Graph chartData={userData} /> */}
    </div>
)
}
