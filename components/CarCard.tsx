'use client'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { CarProps } from '@/types';
import CustomButton from './CustomButton';
import CarDetails from './CarDetails';
import { calculateCarRent, fetchUnsplashImage } from '@/utils'; // Adjust path as per your project structure

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { city_mpg, drive, make, model, transmission, year } = car;
  const carRent = calculateCarRent(city_mpg, year);

  useEffect(() => {
    const fetchImage = async () => {
      // console.log(car.make);
      // console.log(car.model);
      
      
      try {
        const url = await fetchUnsplashImage(car, car.make, car.model, car.year.toString()); // Fetch image URL from Unsplash API
        setImageUrl(url); // Set the fetched image URL
        setLoading(false); // Set loading to false
      } catch (error) {
        console.error('Error fetching Unsplash image:', error);
        setError('Failed to fetch image'); // Set error state if fetching fails
        setLoading(false); // Set loading to false
      }
    };

    fetchImage();
  }, [car]);
  
  

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className='car-card group'>
      <div className='car-card__content'>
        <h2 className='car-card__content-title'>
          {make} {model}
        </h2>
      </div>
      <p className='flex mt-6 text-[32px] font-extrabold'>
        <span className='self-start text-[14px] font-semibold'>₹</span>
        {carRent}
        <span className='self-end text-[14px] font-medium'>/day</span>
      </p>
      <div className='relative w-full h-40 my-3 object-contain'>
        {/* Display the image from Unsplash API if imageUrl is available */}
        {imageUrl ? (
          <Image src={imageUrl} alt="car image" layout="fill" objectFit="cover" className='object-contain' />
        ) : (
          <p>No image available</p>
        )}
      </div>
      <div className='relative flex w-full mt-2'>
        <div className='flex group-hover:invisible w-full justify-between text-grey'>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src="/steering-wheel.svg" alt="steering-wheel logo" width={20} height={20} />
            <p className='text-[14px] font-semibold'>{transmission === 'a' ? 'Automatic' : 'Manual'}</p>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src="/tire.svg" alt="Drive Type" width={20} height={20} />
            <p className='text-[14px] font-semibold'>{drive.toUpperCase()}</p>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src="/gas.svg" alt="Fuel Type" width={20} height={20} />
            <p className='text-[14px] font-semibold'>{city_mpg} /Ltr</p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <CustomButton
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} />
    </div>
  );
};

export default CarCard;
