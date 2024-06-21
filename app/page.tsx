
import { CarCard } from "@/components";
import CustomFilter from "@/components/CustomFilter";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import { fetchCars } from "@/utils";
import Image from "next/image";

export default async function Home() {
  const allCars=await fetchCars();
  // console.log(allCars);
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <main className="overflow-hidden">
      <Hero/>
      <div className="mt-12 padding-x padding-y
      max-width" id="discover">
        <div className="home__text-container">
         <h1 className="text-2xl font-extrabold">Car Catalogue</h1>
         <p>Explore The Cars you might likes </p>
        </div>
        <div className="home__filters">
         <SearchBar/>
         <div className="home__filter-container">
          <CustomFilter title="fuel"/>
          <CustomFilter title="Year"/>
         </div>
        </div>
        {!isDataEmpty ?(
          <section>
            <div className="home__cars-wrapper">
             {allCars?.map((car)=>(<CarCard car={car}/>))}
            </div>
          </section>
        ) :(
          <div className="home__error-container">
            <h2 className="text-xl font-bold text-black">Oops, No results!!!</h2>
            <p>{allCars?.message}</p>
          </div>
        )
        }
      </div>
    </main>
  );
}
