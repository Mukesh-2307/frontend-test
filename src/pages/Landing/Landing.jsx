import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import { FaRegCirclePlay, FaStar, FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import { IoBagHandleOutline } from "react-icons/io5";
import SectionTitle from '../../components/SectionTitle';

const TrendyPlants = [
    {
        src: "/trendy-plant-img-1.png",
        title: "For Your Desks Decorations",
        desc: "I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!",
        price: 599,
        exploreLink: "explore-link",
    },
    {
        src: "/trendy-plant-img-2.png",
        title: "For Your Desks Decorations",
        desc: "The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming",
        price: 399,
        exploreLink: "explore-link",
    }
]

const TopSellingPlants = [
    {
        src: "/hero-plant-image.png",
        title: "Aglaonema plant",
        desc: "The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care",
        price: 300
    },
    {
        src: "/trendy-plant-img-1.png",
        title: "Plantain Lilies",
        desc: "Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes,",
        price: 380
    },
    {
        src: "/top-selling-1.png",
        title: "Cactus",
        desc: "It is known for their ability to thrive in arid environments",
        price: 259
    },
    {
        src: "/top-selling-2.png",
        title: "Swiss cheese Plant",
        desc: "It is a popular tropical houseplant known for its distinctive, perforated leaves",
        price: 400
    },
    {
        src: "/top-selling-3.png",
        title: "Sansevieria plant",
        desc: "It is a popular indoor plant admired for its striking appearance and low-maintenance nature.",
        price: 450
    },
    {
        src: "/trendy-plant-img-2.png",
        title: "Agave plant",
        desc: "The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms.",
        price: 359
    },

]

const CustomerReviews = [
    {
        src: "/review-pic-1.png",
        userName: "Shelly Russel",
        desc: "Just got my hands on some absolutely awesome plants, and I couldn’t be happier!",
        rating: 4,
    },
    {
        src: "/review-pic-2.png",
        userName: "Lula Rolfson",
        desc: "Each one has its own unique charm and personality, and they’ve already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.",
        rating: 5,
    },
    {
        src: "/review-pic-3.png",
        userName: "Carol Huels",
        desc: "It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!",
        rating: 4.5,
    },
]

const Landing = () => {
    return (
        <>
            <div className="h-[2529px] bg-[url('/hero-bg.png')] bg-no-repeat bg-cover bg-cente px-20 py-10">
                <Navbar />
                <div className='relative h-[calc(100vh-40px-24px)]'>

                    <div className='max-w-[800px] flex flex-col items-start justify-between gap-2 absolute top-20 left-0'>
                        <h1 className='text-[118px]'>Earth’s Exhale</h1>
                        <p className='text-[23px]'>"Earth Exhale" symbolizes the purity and vitality of the Earth's natural environment and its essential role in sustaining life.</p>
                        <div className='flex justify-evenly items-center gap-4'>
                            <button className='w-[217px] h-[64px] text-[28px] p-2 border-2 border-[#] rounded-[12px]'>Buy now</button>
                            <FaRegCirclePlay size={70} />
                            <p className='text-[25px]'>
                                live demo...
                            </p>
                        </div>
                    </div>

                    <div className='absolute top-130 left-0 flex flex-col items-start max-w-[409px] min-h-[237px] border-2 border-gray-500 border-opacity-10 rounded-[45px] p-4 gap-4 bg-white/10 backdrop-blur-[15px]'>
                        <div className='flex justify-evenly items-center gap-[28px]'>
                            <div className='rounded-full size-24 overflow-hidden'>
                                <img src="/profile-image.png" alt="profile-image" />
                            </div>
                            <div>
                                <p className='user-name text-[22px]'>Ronnie Hamill</p>
                                <div className="stars-container flex gap-2">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='review-text text-[17px]'>I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.</p>
                        </div>
                    </div>

                    <div className='absolute top-30 right-0 border-2 border-gray-500 flex flex-col justify-end items-center h-[644px] w-[512px] rounded-[45px] p-4 bg-white/10 backdrop-blur-[15px]'>
                        <div className="absolute -top-[50px] left-1/2 -translate-x-1/2 w-[400px] h-[100px] bg-[#161f13] border-b-4 border-gray-500 rounded-b-[90%]">
                        </div>
                        <img src="/hero-plant-image.png" alt="plant-image" className='absolute -top-30 w-[459px] h-auto max-w-none' />
                        <div className='flex flex-col justify-evenly items-start gap-2 w-[400px]'>
                            <p className='text-[23px]'>Indoor Plant </p>
                            <p className='text-[38px]'>Aglaonema plant</p>
                            <FaChevronRight className='absolute right-10' />
                            <button className='text-[28px] w-[217px] h-[64px] p-2 border-2 border-white rounded-[12px] mt-4'>Buy Now</button>
                        </div>
                        <BsThreeDots size={50} className='mt-4' />
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center text-[55px]'>
                    <SectionTitle title="Our Trendy Plants" />
                    <div className='flex flex-col'>
                        {
                            TrendyPlants.map((plantContent, index) => {
                                return (
                                    <TrendyPlantsCard content={plantContent} key={index} place={index} />
                                )
                            })
                        }
                    </div>
                </div>
            </div >

            <div className='px-20 py-10'>
                <div className='flex justify-center items-center'>
                    <SectionTitle title="Our Top Selling Plants" />
                </div>
                <div className='grid grid-cols-3 grid-rows-2 gap-y-40'>
                    {
                        TopSellingPlants.map((cardContent, index) => {
                            return (
                                <TopSellingPlantsCard content={cardContent} key={index} />
                            )
                        })
                    }
                </div>
            </div>

            <div className='px-20 py-10'>
                <div className='flex justify-center items-center'>
                    <SectionTitle title="Customer Reviews" />
                </div>
                <div className='grid grid-cols-3 grid-rows-1 gap-10'>
                    {
                        CustomerReviews.map((cardContent, index) => {
                            return (
                                <ReviewCard content={cardContent} key={index} />
                            )
                        })
                    }
                </div>
            </div>

            <div className='px-20 py-10'>
                <div className='flex justify-center items-center'>
                    <SectionTitle title="Our Best o2" />
                </div>
                <div className='h-[775px] w-[1600px] flex justify-self-center items-center justify-end border-2 border-gray-500 rounded-[48px] p-10 relative bg-white/10 backdrop-blur-[15px] mt-40'>
                    <img src="/hero-plant-image.png" alt="card-image" className='size-[877px] absolute -top-50 left-0' />
                    <div className='flex flex-col gap-10'>
                        <div className='flex flex-col gap-10 max-w-[700px]'>
                            <h1 className='text-[38px]'>
                                We Have Small And Best O2 Plants Collection’s
                            </h1>
                            <p className='text-[28px]'>Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.</p>
                            <p className='text-[28px]'>Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.</p>
                        </div>
                        <div className='flex justify-between'>
                            <button className='text-[28px] w-[217px] h-[64px] p-2 border-2 border-white rounded-[12px]'>Explore</button>
                            <div className='flex gap-2 items-center justify-evenly'>
                                <FaChevronLeft className='size-4' />
                                <p className='text-[16px]'>01/04</p>
                                <FaChevronRight className='size-4' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center my-10'><BsThreeDots size={80}/></div>
            </div>
        </>
    )
}

const TrendyPlantsCard = ({ content, place }) => {
    return (
        <div className={`flex gap-10 items-center justify-end w-[1619px] h-[526px] text-2xl border-2 border-gray-500 rounded-[48px] px-20 py-10 relative mb-60 ${place % 2 === 0 ? '' : "flex-row-reverse"} bg-white/10 backdrop-blur-[15px]`}>
            <img src={content.src} alt="card-plant-image" className={`size-[732px] absolute -top-50 ${place % 2 === 0 ? 'left-0' : "right-0"}`} />
            <div className='card-info w-[670px] flex flex-col items-start justify-evenly gap-6'>
                <h1 className='text-[38px]'>{content.title}</h1>
                <p className='text-[20px]'>{content.desc}</p>
                <p className='text-[38px]'>Rs. {content.price}/-</p>
                <div className='flex gap-4'>
                    <button className='text-[28px] w-[217px] h-[64px] p-2 border-2 border-white rounded-[12px] mt-4'>Explore</button>
                    <button className='p-2 border-2 w-15 border-white rounded-[12px] mt-4 flex justify-center items-center'><IoBagHandleOutline />
                    </button>
                </div>
            </div>
        </div>
    )
}

const TopSellingPlantsCard = ({ content }) => {
    return (
        <div className='h-[644px] w-[512px] flex justify-end items-center flex-col border-2 border-gray-500 rounded-[48px] p-10 relative bg-white/10 backdrop-blur-[15px]'>
            <div className="absolute -top-[50px] left-1/2 -translate-x-1/2 w-[400px] h-[100px] bg-[#1c2416] border-b-4 border-gray-500 rounded-b-[90%]">
            </div>
            <img src={content.src} alt="plant-card-image" className='absolute -top-30 h-auto max-w-none size-[459px]' />
            <div>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-[38px]'>{content.title}</h1>
                    <p className='text-[24px]/8'>{content.desc}</p>
                </div>
                <div className='flex justify-between items-center w-full mt-4'>
                    <p className='text-[38px]'>Rs. {content.price}/-</p>
                    <button className='p-2 border-2 size-15 border-white rounded-[12px] flex justify-center items-center'><IoBagHandleOutline size={30} />
                    </button>
                </div>
            </div>
        </div>
    )
}

const ReviewCard = ({ content }) => {
    console.log(content.src);
    return (
        <div className='h-[480px] w-[512px] flex flex-col justify-start items-start gap-10 border-2 border-gray-500 rounded-[48px] p-10 relative bg-white/10 backdrop-blur-[15px]'>
            <div className="absolute -top-[50px] left-1/2 -translate-x-1/2 w-[400px] h-[100px] bg-[#1c2416] border-b-4 border-gray-500 rounded-b-[90%]">
            </div>
            <div className='flex gap-8 mt-10'>
                <div className='rounded-full overflow-hidden flex justify-center items-center size-[88px]' style={{ backgroundImage: `url(${content.src})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                </div>
                <div>
                    <h1 className='text-[38px]'>{content.userName}</h1>
                    <div className="stars-container flex gap-2">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                </div>
            </div>
            <p className='text-[24px]'>{content.desc}</p>
        </div>
    )
}

export default Landing