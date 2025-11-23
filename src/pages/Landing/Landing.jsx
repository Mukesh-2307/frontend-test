import React from 'react'
import Navbar from '../../components/Navbar';
import { FaRegCirclePlay, FaStar, FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import { IoBagHandleOutline } from "react-icons/io5";
import SectionTitle from '../../components/SectionTitle';
import Footer from '../../components/Footer';

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
            <div className="h-screen md:h-screen lg:h-[2529px] bg-[url('/hero-bg.png')] bg-cover bg-center lg:bg-cente lg:px-0 ">
                <div className='md:max-w-[768px] lg:max-w-[1440px] mx-auto'>

                    <Navbar />

                    <div className='flex flex-col items-center justify-end gap-40 md:relative h-[calc(100vh-40px-24px)] '>

                        <div className='max-w-[300px] md:max-w-[800px] md:flex flex-col items-start justify-between gap-10 md:gap-2 md:absolute md:top-20 md:left-10 md:bg-white/0 md:backdrop-blur-[0px] bg-white/10 backdrop-blur-[25px] md:border-0 border-2 rounded-[12px] border-gray-500 p-2'>

                            <h1 className='text-[28px] md:text-[118px]'>Earth’s Exhale</h1>
                            <p className='text-[12px] md:text-[23px]'>"Earth Exhale" symbolizes the purity and vitality of the Earth's natural environment and its essential role in sustaining life.</p>
                            <div className='flex justify-start md:justify-evenly items-center gap-4 mt-4 md:mt-0'>
                                <button className='md:w-[217px] md:h-[64px] md:text-[28px] p-2 border-2 border-[#] rounded-[12px]'>Buy now</button>
                                <FaRegCirclePlay className='size-[35px] md:size-[70px]' />
                                <p className='md:text-[25px]'>
                                    live demo...
                                </p>
                            </div>
                        </div>

                        <div className='md:absolute md:top-30 md:right-10 border-2 border-gray-500 flex flex-col justify-end items-center h-[300px] w-[250px] md:h-[644px] md:w-[512px] rounded-[45px] p-4 bg-white/10 backdrop-blur-[15px]'>

                            <div className="absolute md:-top-[50px] md:left-1/2 md:-translate-x-1/2 -top-[30px] w-[170px] h-[70px] md:w-[400px] md:h-[100px] bg-[#192116] border-b-4 border-gray-500 rounded-b-[90%]">
                            </div>

                            <img src="/hero-plant-image.png" alt="plant-image" className='absolute -top-30 w-[250px] md:w-[459px] h-auto max-w-none' />
                            <div className='flex flex-col justify-evenly items-start md:gap-2 md:w-[400px] w-[200px]'>
                                <p className='text-[12px] md:text-[23px]'>Indoor Plant </p>
                                <p className='text-[20px] font-bold md:text-[38px]'>Aglaonema plant</p>
                                <FaChevronRight className='absolute right-2 md:right-10' />
                                <button className='md:text-[28px] md:w-[217px] md:h-[64px] w-[170px] p-2 border-2 border-white rounded-[12px] mt-4'>Buy Now</button>
                            </div>
                            <BsThreeDots className='mt-4 size-[25px] md:size-[50px]' />
                        </div>

                        <div className='hidden md:absolute md:top-130 md:left-10 md:flex flex-col items-start max-w-[409px] min-h-[237px] border-2 border-gray-500 border-opacity-10 rounded-[45px] p-4 gap-4 bg-white/10 backdrop-blur-[15px]'>
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

                    <div className='md:px-0 py-10'>
                        <div className='flex justify-center items-center'>
                            <SectionTitle title="Our Top Selling Plants" />
                        </div>
                        <div className='grid grid-col-1 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 gap-y-20 lg:gap-y-40 gap-x-4'>
                            {
                                TopSellingPlants.map((cardContent, index) => {
                                    return (
                                        <TopSellingPlantsCard content={cardContent} key={index} />
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className='md:px-0 py-10'>
                        <div className='flex justify-center items-center'>
                            <SectionTitle title="Customer Reviews" />
                        </div>
                        <div className='grid grid-col-1 gap-y-20 lg:grid-cols-3 lg:grid-rows-1 gap-4'>
                            {
                                CustomerReviews.map((cardContent, index) => {
                                    return (
                                        <ReviewCard content={cardContent} key={index} />
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className='md:px-0 py-10'>
                        <div className='flex justify-center items-center'>
                            <SectionTitle title="Our Best o2" />
                        </div>
                        <div className='h-[575px] w-[300px] lg:w-[1420px] flex justify-self-center items-center justify-end border-2 border-gray-500 rounded-[48px] p-2 relative bg-white/10 backdrop-blur-[15px] mt-10 md:mt-40'>
                            <img src="/hero-plant-image.png" alt="card-image" className='md:size-[750px] absolute md:-top-30 -top-20 md:-left-10' />
                            <div className='flex flex-col gap-10 mt-40 md:mt-0'>
                                <div className='flex flex-col gap-2 lg:gap-10 max-w-[700px]'>
                                    <h1 className='text-[19px] md:text-[38px] font-bold'>
                                        We Have Small And Best O2 Plants Collection’s
                                    </h1>
                                    <p className='text-[12px] md:text-[28px]'>Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.</p>
                                    <p className='text-[12px] md:text-[28px]'>Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.</p>
                                </div>
                                <div className='flex justify-between'>
                                    <button className='text-[14px] md:text-[28px] md:w-[217px] md:h-[64px] p-2 border-2 border-white rounded-[12px] font-bold'>Explore</button>
                                    <div className='flex gap-2 items-center justify-evenly'>
                                        <FaChevronLeft className='size-4' />
                                        <p className='text-[16px]'>01/04</p>
                                        <FaChevronRight className='size-4' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center items-center my-10'><BsThreeDots size={80} /></div>
                    </div>

                    <Footer />
                </div >
            </div>

        </>
    )
}

const TrendyPlantsCard = ({ content, place }) => {
    return (
        <div className={`flex flex-col md:flex md:flex-row md:gap-10 items-center justify-end lg:w-[1420px] h-[400px] lg:h-[526px] w-[300px] text-2xl border-2 border-gray-500 rounded-[48px] px-4 py-6 md:px-20 md:py-10 relative not-last:mb-40 ${place % 2 === 0 ? '' : "md:flex-row-reverse"} bg-white/10 backdrop-blur-[15px]`}>

            <img src={content.src} alt="card-plant-image" className={` md:size-[732px] absolute -top-25 md:-top-50 ${place % 2 === 0 ? 'md:left-0' : "md:right-0"}`} />
            <div className='card-info md:w-[670px] flex flex-col items-start justify-evenly md:gap-6 gap-4'>
                <h1 className='text-[19px] md:text-[38px] font-bold'>{content.title}</h1>
                <p className='text-[10px] md:text-[20px]'>{content.desc}</p>
                <p className='text-[19px] md:text-[38px] font-bold'>Rs. {content.price}/-</p>
                <div className='flex gap-4'>
                    <button className='text-[14px] md:text-[28px] md:w-[217px] md:h-[64px] p-2 border-2 border-white rounded-[12px] mt-4 font-bold'>Explore</button>
                    <button className='p-2 border-2 w-15 border-white rounded-[12px] mt-4 flex justify-center items-center'><IoBagHandleOutline />
                    </button>
                </div>
            </div>
        </div>
    )
}

const TopSellingPlantsCard = ({ content }) => {
    return (
        <div className='h-[400px] w-[300px] md:h-[644px] md:w-[460px] flex justify-self-center justify-end items-center flex-col border-2 border-gray-500 rounded-[48px] p-10 relative bg-white/10 backdrop-blur-[15px]'>

            <div className="absolute md:-top-[50px] left-1/2 -translate-x-1/2 md:w-[300px] md:h-[100px] -top-[50px] w-[200px] h-[90px] bg-[#1c2416] border-b-4 border-gray-500 rounded-b-[90%]">
            </div>

            <img src={content.src} alt="plant-card-image" className='absolute -top-20 md:-top-30 h-auto max-w-none lg:size-[459px] size-[250px]' />
            <div>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-[19px] md:text-[38px] font-bold'>{content.title}</h1>
                    <p className='text-[12px] md:text-[24px]/8'>{content.desc}</p>
                </div>
                <div className='flex justify-between items-center w-full mt-4'>
                    <p className='text-[19px] md:text-[38px] font-bold'>Rs. {content.price}/-</p>
                    <button className='md:p-2 border-2 size-[40px] md:size-15 border-white rounded-[5px] md:rounded-[12px] flex justify-center items-center'><IoBagHandleOutline className='size-[25px] md:size-[30px]' />
                    </button>
                </div>
            </div>
        </div>
    )
}

const ReviewCard = ({ content }) => {
    return (
        <div className='h-auto w-[300px] lg:h-[480px] lg:w-[460px] flex flex-col justify-self-center justify-start items-start gap-10 border-2 border-gray-500 rounded-[48px] p-4 md:p-0 lg:p-10 relative bg-white/10 backdrop-blur-[15px]'>

            <div className="absolute md:-top-[50px] left-1/2 -translate-x-1/2 md:w-[300px] md:h-[100px] -top-[40px] w-[200px] h-[80px] bg-[#1c2416] border-b-4 border-gray-500 rounded-b-[90%]">
            </div>
            <div className='flex gap-8 mt-10'>
                <div className='rounded-full overflow-hidden flex justify-center items-center size-[88px]' style={{ backgroundImage: `url(${content.src})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                </div>
                <div>
                    <h1 className='md:text-[38px]'>{content.userName}</h1>
                    <div className="stars-container flex gap-2">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                </div>
            </div>
            <p className='md:text-[24px]'>{content.desc}</p>
        </div>
    )
}

export default Landing