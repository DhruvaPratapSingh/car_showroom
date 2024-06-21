"use client"
import Image from "next/image"
import Custombtn from "./Custombtn"
const Hero = () => {
  const handleScroll=()=>{

  }
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero_title">
          Find, book, rent a car—quick and super easy!
        </h1>

        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>

        <Custombtn
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10 px-2 py-1"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  )
}

export default Hero
