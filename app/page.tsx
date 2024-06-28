import Image from "next/image";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import CustomFilter from "@/components/CustomFilter";
import { fetchCars } from "@/utils";
import CarCard from "@/components/CarCard";
import { fuels, yearsOfProduction } from "@/constants";
import ShowMore from "@/components/ShowMore";

export default async function Home({searchParams}) {
  //console.log("Initial searchParams:", searchParams);
    const allCars = await fetchCars({
      manufacturer: searchParams.manufacturer || "",
      model:searchParams.model || "",
      year:searchParams.year || 2020,
      fuel:searchParams.fuel || "",
      limit:searchParams.limit ||10,
    });
    
   

  //console.log(allCars);
  //console.log(allCars.length);
  

  const isDataEmpty = allCars.length < 1 || !allCars || !Array.isArray(allCars);
  //console.log(isDataEmpty);
  
  return (
    <main className="overflow-hidden">
      < Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">
            Car Catalogue
          </h1>
          <p className="text-gray-500">Explore the cars you love to drive</p>
      </div>
          <div className="home__filters">
            <SearchBar />
            <div className="home__filter-container">
              <CustomFilter title="fuel" options={fuels}/>
              <CustomFilter title="year" options={yearsOfProduction}/>
            </div>
          </div>

        { !isDataEmpty ? (
          <section >
            <div className="home__cars-wrapper">
              {allCars?.map((car)=> 
              <CarCard car={car}/>
              )}
            </div>
            <ShowMore 
                pageNumbers={(searchParams.limit || 8) /8}
                isNext = {(searchParams.limit ||8) > allCars.length}
            >
              
            </ShowMore>
          </section>
        ):(
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops! No cars found</h2>
          </div>
        )}

      </div>
          </main>
  );
}
