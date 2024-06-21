import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {footerLinks} from "@/constants"
const Footer = () => {
  return (
    <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-200'>
      <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
        <div className='flex flex-col justify-start items-start gap-6'>
         <Image src="/logo.svg"
         alt="logo"
         width={118}
         height={18}
         className='object-contain'/>
         <h2>Carhub123 <br/>
         all right reserved @coder &copy;</h2> 
        </div>
        <div className='footer__links'>
       {
        footerLinks.map((items)=>(
          <div key={items.title}
          className='footer__link'>
            <h3 className='font-bold'>{items.title}</h3>
            {
              items.links.map((item)=>(
                <Link key={item.title} href={item.url}
                className='text-gray-600'>
                {item.title}
                </Link>
              ))
            }

          </div>
        ))
       }
      </div>
      </div>
      <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-200 sm:px-16 px-6 py-10'>
        <p>@2024 CarShowroom. All right reserved</p>
        <div className='footer__copyrights-link'>
          <Link href="/" className='text-gray-600'>Privacy Policy</Link>
          <Link href="/" className='text-gray-600'>Terms and Conditions</Link>
      </div>
      </div>
    </footer>
  )
}

export default Footer
