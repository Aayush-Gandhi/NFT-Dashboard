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
        arrows: false,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 1500,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 1500,
                }
            },
        ]
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
                <div className='flex justify-between items-center pb-5 lg:pt-5'>
                    <span className='text-md lg:text-4xl text-[#E2E4E9]'>Popular NFT’s Live Auction</span>
                    <button className='flex items-center text-[#5EEAD4]'>Show More <BsChevronRight /> </button>
                </div>

                <div className='w-[82vw] ml-6 md:ml-0 md:w-[95vw] lg:w-[90vw]'>
                    <Slider {...settings}>
                        {
                            liveauction.map((data, index) => {
                                return (
                                    // <div className='bg-black w-12 h-32 text-white'>1</div>
                                    <div className='relative p-2' key={index}>
                                        <div className='overflow-hidden rounded-2xl'>
                                            <img src={data.img} alt="" className='rounded-3xl hover:scale-105 duration-700' />
                                        </div>
                                        <div className='border p-1 lg:p-4 rounded-2xl bg-black/[.40] lg:absolute left-10 bottom-10 mt-4 lg:mt-0'>

                                            <div className='flex items-center text-white'>
                                                <img src="./Images/Timer.svg" alt="" className='w-14' />

                                                <div className='flex flex-col gap-2 text-left'>
                                                    <span className='text-xl lg:text-3xl'>
                                                        <Countdown date={Date.now() + 60000 * (60 * 19)} renderer={renderer} />
                                                    </span>
                                                    <span className='text-sm'>Time Remaining</span>
                                                </div>

                                                <div className='flex flex-col pl-5 gap-2 text-left'>
                                                    <span className='text-lg xl:text-3xl'> {data.ETH} </span>
                                                    <span>Highest Bid</span>
                                                </div>

                                            </div>
                                            <button className='glitch border rounded-2xl lg:mt-4 p-2 w-full text-white'>Place A Bid</button>

                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
    )
}
