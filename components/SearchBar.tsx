"use client"
import React, { useState } from 'react'
import SearchManufacturer from './SearchManufacturer'
const SearchBar = () => {

    const [manufacturer,setmanufacturer]=useState("");
    const handlesearch=()=>{

    }
  return (
   <form className='searchbar' onSubmit={handlesearch}>
    <div className='searchbar__item'>
        <SearchManufacturer
        manufacturer={manufacturer}
        setmanufacturer={setmanufacturer}
        />
    </div>
   </form>
  )
}

export default SearchBar
