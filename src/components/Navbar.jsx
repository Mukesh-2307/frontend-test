import React, { useState } from 'react'
import { IoBagHandleOutline, IoSearchSharp, IoCloseOutline } from "react-icons/io5";
import { HiBars3BottomRight } from "react-icons/hi2";
import { TbPlant2, TbTriangleInvertedFilled } from "react-icons/tb";


const Navbar = () => {
    const [toggleHam, setToggleHam] = useState(false);
    const handleHamMenu = () => {
        setToggleHam(!toggleHam);
    }
    return (
        <div className='flex justify-between items-center text-white md:pt-10 pt-2 md:px-10 px-4 relative'>
            <div className='flex gap-2 justify-evenly items-center'>
                <TbPlant2 className='size-30px md:size-[40px]' />
                <h1 className='font-bold'>FloraVision.</h1>
            </div>

            <div className='hidden md:block'>
                <ul className='flex gap-20 font-medium'>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#" className='flex justify-evenly items-center gap-2'>Plant Types <TbTriangleInvertedFilled size={10} />
                        </a>
                    </li>
                    <li>
                        <a href="#">More</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>


            {toggleHam && < div className='md:hidden absolute top-0 left-0 w-full z-1 bg-[#1B2316] px-4 pb-4'>
                <div className='flex justify-between items-center pt-2 h-[32px]'>
                    <div className='flex gap-2 justify-evenly items-center'>
                        <TbPlant2 className='size-30px md:size-[40px]' />
                        <h1 className='font-bold'>FloraVision.</h1>
                    </div>
                    <div className='flex md:gap-10 gap-4'>
                        <IoCloseOutline className='cursor-pointer' onClick={handleHamMenu} />
                    </div>
                </div>
                <ul className='flex flex-col gap-5 font-medium pt-4'>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#" className='flex justify-start items-center gap-2'>Plant Types <TbTriangleInvertedFilled size={10} />
                        </a>
                    </li>
                    <li>
                        <a href="#">More</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
                <div />
            </div >}

            <div className='flex md:gap-10 gap-4'>
                <IoSearchSharp className='cursor-pointer md:size-[40px]' />
                <IoBagHandleOutline className='cursor-pointer md:size-[40px]' />
                <div className=' md:hidden'>
                    <HiBars3BottomRight className='cursor-pointer' onClick={handleHamMenu} />
                </div>
            </div>


        </div>
    )
}

export default Navbar