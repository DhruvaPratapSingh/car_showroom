"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { CarProps } from '@/types'
import { calculateCarRent, generateCarImageUrl } from '@/utils';
import Custombtn from './Custombtn';
import CarDetails from './CarDetails';

interface CarCardProps{
    Car:CarProps;
}
const CarCard = ({car}:CarCardProps) => {
    const {city_mpg,combination_mpg,cylinders,displacement,drive,fuel_type,highway_mpg,make,model,transmission,year}=car;

    const carRent = calculateCarRent(city_mpg,year);
    const [isOpen,setIsOpen]=useState(false)
  return (
    <div className='car-card group '>
        <div className='car-card__content'>
        <h2 className='car-card__content-title'>{model}
        {make}</h2>
        </div>
        <p className='flex mt-6 text-[32px] font-semibold'>
            <span className='self-start text-[14px] font-medium'>
                $
            </span>
               {carRent}
            <span className='self-end text-[14px] font-medium'>
               /day
            </span>
        </p>
    
    <div className='relative w-full h-40 my-3 object-contain'>
        <Image src={generateCarImageUrl(car)} fill priority className='object-contain'/>
    </div>
    <div className='relative flex w-full mt-2'>
    <div className='flex group-hover:invisible w-full justify-between text-gray-600'>
        <div className='flex flex-col justify-center
        items-center gap-2'>
            <Image src="/steering-wheel.svg" width={30} height={30} alt="steering Wheel"/>
            <p className='text-[15px]'>{transmission ==='a' ?  'Automatic' : 'Manual'}</p>

        </div>
        <div className='flex flex-col justify-center
        items-center gap-2'>
            <Image src="/tire.svg" width={30} height={30} alt="tire"/>
            <p className='text-[15px]'>
                {drive.toUpperCase()}
            </p>

        </div>
        <div className='flex flex-col justify-center
        items-center gap-2'>
            <Image src="/gas.svg" width={30} height={30} alt="steering Wheel"/>
            <p className='text-[15px]'>{city_mpg}MPG</p>
        </div>
    </div>
    <div className='car-card__btn-container'>
        <Custombtn title='View More' containerStyles='w-full py-[16px] rounded-full bg-primary-blue'  textStyles='text-white text-[14px] leading-[17px] font-bold'
            rightIcon='/right-arrow.svg'
            handleClick={() => setIsOpen(true)} />
    </div>
    </div>
    <CarDetails isOpen={isOpen} closeModal={()=>setIsOpen(false)} car={car}/>
    </div>
  )
}

export default CarCard
