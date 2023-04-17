import React, { useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

export default function BidsData({ img, likes, name, ETH, p1, p2, p3 }) {

    const [liked, setLiked] = useState(false);

    const handleLike = () => {
        setLiked(!liked);

    };
    return (
        <div>
            <div className='w-[200px]'>
                <div className='flex items-center justify-between'>
                    <div className='relative w-20'>
                        <img src="./Images/Bg.svg" alt="" className='' />
                        <span className='absolute top-3 text-sm text-white'> 00:00:00 </span>
                    </div>

                    <span className='flex items-center' onClick={handleLike}>
                        <span className='pl-1'>232</span>
                        {liked ? (
                            <AiFillHeart size={25} className='fill-[#9733EE]' />
                        ) : (
                            <AiOutlineHeart size={25} className='fill-[#9733EE]' />
                        )}
                    </span>

                </div>
                <div>
                    <img src={img} alt="" className='rounded-2xl ' />
                </div>
                <div className='pt-3'>
                    <span>{name} </span>
                    <div className='pt-2 flex relative h-[40px]'>
                        <span> {ETH} ETH </span>
                        <div>
                            <img src={p1} alt="" className='z-30 absolute w-7 right-10' />
                            <img src={p2} alt="" className='z-20 absolute w-7 right-5' />
                            <img src={p3} alt="" className='z-10 absolute w-7 right-0' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
