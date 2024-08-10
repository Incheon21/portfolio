import Image from 'next/image'
import React from 'react'

type Props = {
    image: string;
    alttext: string;
    label: string;
}

const Cards: React.FC<Props> = ({ image, alttext, label }) => {
return (
    <div className='bg-white shadow-md h-[144px] w-auto p-6 lg:p-8 xl:p-12 rounded-3xl flex flex-row items-center justify-center gap-2 sm:gap-6'>
        <div>
        <Image src={image} alt={alttext} width={100} height={100}/>
        </div>
        <div className='flex align-middle text-black'>
            <a className='flex text-xs sm:text-base lg:text-lg xl:text-2xl font-semibold align-middle items-center'>{label}</a>
        </div>
    </div>
)
}

export default Cards