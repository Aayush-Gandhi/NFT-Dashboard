import React from 'react'
import Countdown from 'react-countdown';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsChevronRight } from 'react-icons/bs';

export default function Auction() {
    // const settings =
    // {
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 2,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     autoplay: false,
    //     autoplaySpeed: 2000
    // };

    const settings = {
        dots: false,
        infinite: true,
        vertical: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
    };

    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return "00:00:00";
        } else {
            // Render a countdown
            return <span>{hours}:{minutes}:{seconds}</span>;
        }
    };


    const liveauction = [
        {
            img: '/Images/Auction1.png',
            ETH: '17.53 ETH'
        },
        {
            img: '/Images/Auction2.png',
            ETH: '17.53 ETH'
        },
        {
            img: '/Images/Auction1.png',
            ETH: '17.53 ETH'
        },
        {
            img: '/Images/Auction2.png',
            ETH: '17.53 ETH'
        }
    ]

    return (
        <div>
            <div>

                <div className='flex justify-between items-center pb-5 pt-16'>
                    <span className='text-4xl text-[#E2E4E9]'>Popular NFT’s Live Auction</span>
                    <button className='flex items-center text-[#5EEAD4]'>Show More <BsChevronRight /> </button>
                </div>

                <div className='w-[67vw]'>
                    <Slider {...settings}>
                        {
                            liveauction.map((data, index) => {
                                return (
                                    // <div className='bg-black w-12 h-32 text-white'>1</div>
                                    <div className='relative p-2 overflow-hidden' key={index}>
                                        <img src={data.img} alt="" className='rounded-3xl ' />
                                        <div className='border p-4 rounded-2xl bg-black/[.40] absolute left-10 bottom-10'>

                                            <div className='flex items-center text-white'>
                                                <img src="./Images/Timer.svg" alt="" className='w-14'/>

                                                <div className='flex flex-col gap-2 text-left'>
                                                    <span className='text-3xl'>
                                                        <Countdown date={Date.now() + 60000 * (60 * 19)} renderer={renderer} />
                                                    </span>
                                                    <span className='text-sm'>Time Remaining</span>
                                                </div>

                                                <div className='flex flex-col pl-5 gap-2 text-left'>
                                                    <span className='text-3xl'> {data.ETH} </span>
                                                    <span>Highest Bid</span>
                                                </div>

                                            </div>
                                            <button className='border rounded-2xl p-2 w-full text-white'>Place A Bid</button>

                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        </div >
    )
}
