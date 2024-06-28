import axios from "axios";
import { CarProps , FilterProps } from "@/types";
// const fetch = require('node-fetch');

// const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
// const options = {
//   method: 'GET',
//   headers: {
//     'x-rapidapi-key': 'c1f3c8b257msh0ed3ac1fc870457p16ed2djsn0b8f9d38d223',
//     'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

export async function fetchCars(filters:FilterProps){
    const {manufacturer, model, year, fuel, limit} = filters
   // console.log("amansaxena2");
    //console.log(manufacturer, model, year, fuel, limit);
    
    
    //console.log(manufacturer, model, year, fuel, limit);
   const headers =  {
    'x-rapidapi-key': 'c1f3c8b257msh0ed3ac1fc870457p16ed2djsn0b8f9d38d223',
    'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
  }

    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&model=${model}&year=${year}&limit=${limit}&fuel_type=${fuel} `,{
    headers: headers
  })
  console.log(response.json);
  
  const result = await response.json();
  return result;
}


export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };
  


  export const fetchUnsplashImage = async (car: CarProps, make: string, model: string, year: string) => {
    // console.log("fetchUnsplashImage Function");
    // console.log("Recieved Car Object", car);
    const query = `${make} ${model} ${year}`;
    // console.log(car.make);
    // console.log(car.model);
    
    
    const UNSPLASH_ACCESS_KEY = "ekfcLYQXw2a097rHC5bK67B5qaGmezTSdOXIHvJrSVQ";
  
    try {
        // console.log(car.model);
        // console.log(car.make);
        console.log(query);
      const response = await axios.get(`https://api.unsplash.com/search/photos`, {
        params: { query: `${query}`, per_page: 1 },
        headers: {
          Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`
        }
      });
  
      if (response.data.results.length > 0) {
        const imageUrl = response.data.results[0].urls.regular;
        return imageUrl;
      } else {
        throw new Error('No images found');
      }
    } catch (error) {
      console.error('Error fetching image from Unsplash:', error);
      throw new Error('Failed to fetch image from Unsplash');
    }
  };


  export const updateSearchParams = (type: string , value: string) =>{
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set(type,value)
    const newPathName = `${window.location.pathname}?${searchParams.toString()}`
    return newPathName;

  }