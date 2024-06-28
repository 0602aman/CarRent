"use client"
import React from 'react'
import Image from 'next/image'
import SearchManufacturer from './SearchManufacturer'
import { useState } from 'react'
import { useRouter } from 'next/navigation'



const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState("")
    const [model, setModel] = useState("")
    const router = useRouter()
    const SearchButton =({otherClasses}:{otherClasses:string})=>{
      return(
      <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
        <Image src="/magnifying-glass.svg" alt="magnifying-glass" width={40} height={40} className='object-contain'/>
        Search
      </button>
    )}
    const handleSearch = (e:React.FormEvent<HTMLFormElement>) =>{
      e.preventDefault();
      if(manufacturer === "" && model === ""){
        return alert("Please enter a manufacturer and model");
      }
      updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase())
    } 
      const updateSearchParams = (model: string, manufacturer: string)=>{
        const searchParams = new URLSearchParams( window.location.search)
        if(model){
          searchParams.set("model", model)
        }else{
          searchParams.delete("model")

        }
        if(manufacturer){
            searchParams.set("manufacturer",manufacturer)
        }else{
          searchParams.delete("manufacturer")
        }
        const queryString = searchParams.toString() ? `?${searchParams.toString()}` : '';
        const newPathName = `${window.location.pathname}${queryString}`;
        //console.log("Navigating to: ", newPathName);
        
        router.push(newPathName, {scroll:false})
      } 
  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className='searchbar__item'>
            <SearchManufacturer 
            manufacturer = {manufacturer}
            setManuFacturer = {setManufacturer}
            />
            <SearchButton otherClasses="sm:hidden" />

        </div>
        <div className='searchbar__item'>
          <Image src="/model-icon.png" alt="model-icon" width={25} height={25} 
          className='absolute w-[20px] h-[20px] object-contain ml-3'/>
          <input type="text" value={model} onChange={(e)=>setModel(e.target.value)} 
          placeholder='Model'
          className='searchbar__input' />
          <SearchButton otherClasses="hidden sm:block" />
        </div>
        <SearchButton otherClasses="max sm:hidden" />
    </form>
  )
}

export default SearchBar