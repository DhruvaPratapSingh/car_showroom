"use client"
import Image from "next/image"
import Custombtn from "./Custombtn"
const Hero = () => {
  const handleScroll=()=>{

  }
  return (
    <div  className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero_title">
          Find, book, or rent a car -- quickly and easily!
        </h1>
        <p className="hero__subtitle">
          streamline your car rental expeience with our effortless booking process.
        </p>
        <Custombtn 
        title="Explore Cars"
        containerStyles="bg-primary-blue text-white rounded-full mt-10 p-2"
        handleClick={handleScroll}
        />
        <div className="hero__image-container">
            <div className="hero__image">
              <Image src="/hero.png" alt="hero img"
              fill className="object-contain"
              />
              <div className="hero__image-overlay"></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
