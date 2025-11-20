import React from 'react'

import { IoBagHandleOutline, IoSearchSharp } from "react-icons/io5";
import { HiBars3BottomRight } from "react-icons/hi2";
import { TbPlant2, TbTriangleInvertedFilled  } from "react-icons/tb";


const Navbar = () => {
    return (
        <div className='flex justify-between items-center text-white'>
            <div className='flex gap-2 justify-evenly items-center'>
                <TbPlant2 size={40} />
                <h1 className='font-bold'>FloraVision.</h1>
            </div>

            <div>
                <ul className='flex gap-20 font-medium'>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#" className='flex justify-evenly items-center gap-2'>Plant Types <TbTriangleInvertedFilled size={10}/>
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
            <div className='flex gap-10 '>
                <IoSearchSharp size={40} className='cursor-pointer' />
                <IoBagHandleOutline size={40} className='cursor-pointer' />
                <HiBars3BottomRight size={40} className='cursor-pointer' />
            </div>
        </div>
    )
}

export default Navbar