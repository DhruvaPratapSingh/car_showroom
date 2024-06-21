"use client"

import { SearchManufacturerProps } from "@/types"
import { Combobox,Transition } from "@headlessui/react"
import Image from "next/image"
import { Fragment, useState } from "react"
import { manufacturers } from "@/constants"
const SearchManufacturer = ({manufacturer,setmanufacturer}:SearchManufacturerProps) => {

    const [Query,setQuery]=useState("");
    const filterManufacturers=Query===""?manufacturers:manufacturers.filter((item)=>(
        item.toLowerCase().replace(/\s+/g,"").includes(Query.toLowerCase().replace(/\s+/g,""))
    ))
  return (
    <div className="search-manufacturer">
    <Combobox value={manufacturer} onChange={setmanufacturer}>
        <div className="relative w-full">
         <Combobox.Button className="absolute top-[14px]">
            <Image src="/car-logo.svg" 
            width={20} height={20} className="mt-1" alt="Car-logo"/>
         </Combobox.Button>
         <Combobox.Input className="search-manufacturer__input" placeholder="Volkswagon"
         displayValue={(manufacturer:string)=>manufacturer}
         onChange={(e)=>
            setQuery(e.target.value)}/>

            <Transition 
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={()=>setQuery('')}
            >
            <Combobox.Options>
                {/* {
                    filterManufacturers.length===0 && Query !== "" && (
                        <Combobox.Option
                        value={Query}
                        className="search-manufacturer__option"
                        >
                       Create "{Query}"
                        </Combobox.Option>
                    )} :*/}
                    {
                    filterManufacturers.map((item) =>(
                        <Combobox.Option
                        key={item}
                        className={({active})=>`relative search-manufacturer__option ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`}
                        value={item}
                        >
                         {/* {item} */}
                         {({ selected, active }) => (
                      <>
                        <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                          {item}
                        </span>

                        {/* Show an active blue background color if the option is selected */}
                        {selected ? (
                          <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active? "text-white": "text-pribg-primary-purple"}`}
                          ></span>
                        ) : null}
                      </>
                    )}
                        </Combobox.Option>
                    ))}
                
            </Combobox.Options>
            </Transition>
        </div>
    </Combobox>
    </div>
  ) 
}

export default SearchManufacturer
