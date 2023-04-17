import React from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import Slider from 'react-slick';
import BidsData from './BidsData';

export default function HotBids() {

    

    const settings = {
        dots: false,
        infinite: true,
        vertical: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 2
    };

   

    const hotbids = [
        {
            img: './Images/Bids1.png',
            likes: '232',
            name: 'Stretch of Time',
            ETH: '0.045',
            p1: './Images/p1.png',
            p2: './Images/p2.png',
            p3: './Images/p3.png'
        },
        {
            img: './Images/Bids2.png',
            likes: '232',
            name: 'Stretch of Time',
            ETH: '0.045',
            p1: './Images/p1.png',
            p2: './Images/p2.png',
            p3: './Images/p3.png'
        },
        {
            img: './Images/Bids3.png',
            likes: '232',
            name: 'Stretch of Time',
            ETH: '0.045',
            p1: './Images/p1.png',
            p2: './Images/p2.png',
            p3: './Images/p3.png'
        },
        {
            img: './Images/Bids4.png',
            likes: '232',
            name: 'Stretch of Time',
            ETH: '0.045',
            p1: './Images/p1.png',
            p2: './Images/p2.png',
            p3: './Images/p3.png'
        },
        {
            img: './Images/Bids5.png',
            likes: '232',
            name: 'Stretch of Time',
            ETH: '0.045',
            p1: './Images/p1.png',
            p2: './Images/p2.png',
            p3: './Images/p3.png'
        },
        {
            img: './Images/Bids6.png',
            likes: '232',
            name: 'Stretch of Time',
            ETH: '0.045',
            p1: './Images/p1.png',
            p2: './Images/p2.png',
            p3: './Images/p3.png'
        },
        {
            img: './Images/Bids1.png',
            likes: '232',
            name: 'Stretch of Time',
            ETH: '0.045',
            p1: './Images/p1.png',
            p2: './Images/p2.png',
            p3: './Images/p3.png'
        },
        {
            img: './Images/Bids2.png',
            likes: '232',
            name: 'Stretch of Time',
            ETH: '0.045',
            p1: './Images/p1.png',
            p2: './Images/p2.png',
            p3: './Images/p3.png'
        },
        {
            img: './Images/Bids3.png',
            likes: '232',
            name: 'Stretch of Time',
            ETH: '0.045',
            p1: './Images/p1.png',
            p2: './Images/p2.png',
            p3: './Images/p3.png'
        },
        {
            img: './Images/Bids4.png',
            likes: '232',
            name: 'Stretch of Time',
            ETH: '0.045',
            p1: './Images/p1.png',
            p2: './Images/p2.png',
            p3: './Images/p3.png'
        },
        {
            img: './Images/Bids5.png',
            likes: '232',
            name: 'Stretch of Time',
            ETH: '0.045',
            p1: './Images/p1.png',
            p2: './Images/p2.png',
            p3: './Images/p3.png'
        },
        {
            img: './Images/Bids6.png',
            likes: '232',
            name: 'Stretch of Time',
            ETH: '0.045',
            p1: './Images/p1.png',
            p2: './Images/p2.png',
            p3: './Images/p3.png'
        }
    ]

    return (
        <div className='pt-10'>
            <div className='text-left text-2xl text-[#A5F3FC] font-semibold'>🔥 Hot Bids</div>
            <div className='w-[66vw] py-5'>
                <Slider {...settings}>
                    {
                        hotbids.map((data, index) => {
                            return (
                                
                                    <BidsData key={index} {...data}/>  
                                
                            )
                        })
                    }
                </Slider>


            </div>
        </div>
    )
}
