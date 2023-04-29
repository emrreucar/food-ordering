import React from 'react';
import Image from 'next/image';
import Title from './ui/Title';
import { MdShoppingCart } from 'react-icons/md';

const CampaignItem = () => {
    return(
        <div className='bg-secondary flex-1 rounded-lg py-5 px-[20px] flex items-center gap-x-4 '>
            <div className='relative md:w-44 md:h-44 w-36 h-36 border-[5px] rounded-full border-primary'>
                <Image src='/images/o1.jpg' className='rounded-full hover:scale-105 duration-300' fill alt='/' />
            </div>
            <div className='text-white'>
                <Title addClass='text-2xl'>Tasty Thursday</Title>
                <div className='font-dancing my-2'>
                    <span className='text-3xl'>20%</span>
                    <span className='text-sm inline-block ml-2'>Off</span>
                </div>
                <button className='btn-primary flex items-center gap-x-2'>
                    Order Now <MdShoppingCart size={20} />
                </button>
            </div>
        </div>
    )
}

const Campaigns = () => {
  return (
    <div className='flex justify-between container mx-auto py-[90px] gap-8 flex-wrap '>
        <CampaignItem />
        <CampaignItem />
    </div>
  )
}

export default Campaigns