import React from 'react'

const SectionTitle = ({ title }) => {
    return (
        <div className="relative inline-block px-4 py-2 mt-10 mb-20">
            <span className="absolute bottom-1 left-0 md:bottom-2 md:left-0 w-7 h-7 md:w-10 md:h-16 border-b-4 border-l-4 border-yellow-300 opacity-50 rounded-bl-xl"></span>
            <span className="absolute top-2 right-0 md:top-4 md:right-0 w-7 h-7 md:w-10 md:h-16 border-t-4 border-r-4 border-yellow-300 opacity-50 rounded-tr-xl"></span>
            <h2 className="text-white text-[25px] md:text-[55px] font-semibold">
                {title}
            </h2>
        </div>
    )
}

export default SectionTitle