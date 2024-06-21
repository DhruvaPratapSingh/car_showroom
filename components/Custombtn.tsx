"use client"
import React from 'react'
import Image from 'next/image'
import { customButtonProps } from '@/types'
const Custombtn = ({title,containerStyles,handleClick}:customButtonProps) => {
  return (
   <button 
   disabled={false}
   type={"button"}
   className={`custom-btn`}
   onClick={handleClick}
   >
   <span className={`flex-1 ${containerStyles}`}>
    {title}
   </span>
   </button>
  )
}

export default Custombtn
