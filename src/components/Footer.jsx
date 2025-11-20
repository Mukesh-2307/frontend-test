import React from 'react'
import { FaSquareFacebook, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { TbPlant2 } from "react-icons/tb";

const Footer = () => {
    return (
        <div className='px-20 py-10'>
            <div className='grid grid-cols-3'>

                <div className='flex flex-col gap-4'>
                    <div className='flex gap-4 justify-start items-center'>
                        <TbPlant2 size={80} />
                        <p className='text-[45px] font-bold'>FloraVision.</p>
                    </div>
                    <p className='text-[28px]'>"From lush indoor greens to vibrant outdoor blooms, our plants are crafted to thrive and elevate your living environment."</p>
                </div>

                <div className='flex items-start justify-center'>
                    <ul className='flex flex-col gap-4'>
                        <p className='text-[28px] mb-10 font-bold'>Quick Links</p>
                        <p className='text-[24px] underline'>Home</p>
                        <p className='text-[24px] underline'>Types of plants</p>
                        <p className='text-[24px] underline'>contact</p>
                        <p className='text-[24px] underline'>Privacy</p>
                    </ul>
                </div>

                <div>
                    <p className='text-[28px] font-bold'>For Everyday Updates</p>
                    <div className='flex gap-2 justify-between items-center px-2 border-2 border-white rounded-md w-[562px] h-[74px] mt-12'>
                        <input type="text" placeholder='Enter Email' className='text-[24px] pl-4'/>
                        <button className='bg-white text-black font-bold p-2 rounded-md px-4 h-[54px]'>Subscribe</button>
                    </div>
                </div>

            </div>
            <div className='grid grid-cols-3 my-10'>
                <div className='col-span-2 flex gap-10 justify-start items-center'>
                    <FaSquareFacebook size={30}/>
                    <FaLinkedin size={30}/>
                    <FaSquareXTwitter size={30}/>
                </div>
                <div className='flex gap-10 justify-center items-center'>
                    <p className='text-[24px]'>FloraVision &copy; all right reserve</p>
                </div>
            </div>
        </div>
    )
}

export default Footer