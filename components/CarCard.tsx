"use client"
import React from 'react'
import Image from 'next/image'
import { CarProps } from '@/types'
import { calculateCarRent } from '@/utils';

interface CarCardProps{
    Car:CarProps;
}
const CarCard = ({car}:CarCardProps) => {
    const {city_mpg,combination_mpg,cylinders,displacement,drive,fuel_type,highway_mpg,make,model,transmission,year}=car;

    const carRent = calculateCarRent(city_mpg,year)
  return (
    <div className='car-card group'>
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
    
    <div>
        
    </div>
    </div>
  )
}

export default CarCard
