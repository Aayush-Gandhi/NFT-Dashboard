import React, { useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TopSellers() {

    const [progress, setProgress] = useState(0);

    const settings = {
        dots: false,
        infinite: false ,
        speed: 500,
        arrows: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        beforeChange: (oldIndex, newIndex) =>
            setProgress((newIndex / (topsellers.length - 1)) * 100),
    };

    const topsellers = [
        {
            img: '/Images/TopSeller1.png',
            uname: '@dicar',
            bids: '$232,102',
        },
        {
            img: '/Images/TopSeller2.png',
            uname: '@astroo2',
            bids: '$172,023',
        },
        {
            img: '/Images/TopSeller3.png',
            uname: '@micle',
            bids: '$92,002',
        },
        {
            img: '/Images/TopSeller4.png',
            uname: '@11 eror D.',
            bids: '$88,024',
        },
        {
            img: '/Images/TopSeller5.png',
            uname: '@astroo2',
            bids: '$172,023',
        },
        {
            img: '/Images/TopSeller6.png',
            uname: '@astroo2',
            bids: '$172,023',
        },
        {
            img: '/Images/TopSeller1.png',
            uname: '@dicar',
            bids: '$232,102',
        },
        {
            img: '/Images/TopSeller2.png',
            uname: '@astroo2',
            bids: '$172,023',
        },
        {
            img: '/Images/TopSeller3.png',
            uname: '@micle',
            bids: '$92,002',
        },
        {
            img: '/Images/TopSeller4.png',
            uname: '@11 eror D.',
            bids: '$88,024',
        },
        {
            img: '/Images/TopSeller5.png',
            uname: '@astroo2',
            bids: '$172,023',
        },
        {
            img: '/Images/TopSeller6.png',
            uname: '@astroo2',
            bids: '$172,023',
        }


    ]

    return (
        <div>
            <div>
                <span className='flex items-center text-[#6EE7B7] font-bold text-2xl pt-4'> <AiFillStar className='text-[yellow]' /> Top Sellers </span>
            </div>

            <div className='w-[67vw] pt-4 slider-container'>
                <Slider {...settings}>
                    {
                        topsellers.map((data, index) => {
                            return (
                                <div className='pb-5' key={index}>
                                    <div className='flex items-center gap-4'>
                                        <img src={data.img} alt="" className='w-20 hover:scale-95 duration-700' />
                                        <div className='flex flex-col text-left'>
                                            <span className='text-xl'>{data.uname}</span>
                                            <span className='text-[#5EEAD4]'>{data.bids}</span>
                                        </div>
                                    </div>
                                </div>

                            )
                        })
                    }
                </Slider>
                <div className='progress-bar' style={{ width: `${progress}%` }}></div>
            </div>
        </div>
    )
}
