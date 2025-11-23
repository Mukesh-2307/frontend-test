import React from 'react'
import { FaSquareFacebook, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { TbPlant2 } from "react-icons/tb";

const Footer = () => {
    return (
        <div className='px-4 py-4 xl:py-4'>
            <div className='xl:grid xl:grid-cols-3'>

                <div className='flex flex-col gap-4'>
                    <div className='flex gap-4 justify-start items-center'>
                        <TbPlant2 className='size-[30px] xl:size-[80px]'/>
                        <p className='text-[23px] xl:text-[45px] font-bold'>FloraVision.</p>
                    </div>
                    <p className='text-[14px] xl:text-[28px]'>"From lush indoor greens to vibrant outdoor blooms, our plants are crafted to thrive and elevate your living environment."</p>
                </div>

                <div className='flex xl:items-start xl:justify-center mt-10 xl:mt-0'>
                    <ul className='flex flex-col gap-4'>
                        <p className='text-[23px] xl:text-[28px] mb2 xl:mb-10 font-bold'>Quick Links</p>
                        <p className='xl:text-[24px] underline'>Home</p>
                        <p className='xl:text-[24px] underline'>Types of plants</p>
                        <p className='xl:text-[24px] underline'>contact</p>
                        <p className='xl:text-[24px] underline'>Privacy</p>
                    </ul>
                </div>

                <div>
                    <p className='text-[23px] xl:text-[28px] font-bold mt-10 xl:mt-0'>For Everyday Updates</p>
                    <div className='xl:flex gap-2 justify-between items-center xl:px-2 xl:border-2 border-white rounded-md xl:w-auto xl:h-[74px] mt-5 xl:mt-12'>
                        <input type="text" placeholder='Enter Email' className='text-[18px] w-full h-[50px] xl:text-[24px] xl:border-0 border-2 border-white pl-2 xl:pl-4 rounded-[10px]'/>
                        <button className='bg-white text-black font-bold p-2 rounded-md px-4 xl:h-[54px] mt-2 xl:mt-0 w-full xl:w-auto cursor-pointer'>Subscribe</button>
                    </div>
                </div>

            </div>
            <div className='xl:grid grid-cols-3 xl:my-10 mt-5 flex flex-col justify-evenly items-center gap-4'>
                <div className='col-span-2 flex gap-10 justify-start items-center'>
                    <FaSquareFacebook size={30}/>
                    <FaLinkedin size={30}/>
                    <FaSquareXTwitter size={30}/>
                </div>
                <div className='flex gap-10 justify-center items-center'>
                    <p className='xl:text-[24px]'>FloraVision &copy; all right reserve</p>
                </div>
            </div>
        </div>
    )
}

export default Footer