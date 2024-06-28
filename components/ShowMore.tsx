"use client"


import React from 'react'
import { useRouter } from 'next/navigation'
import { ShowMoreProps } from '@/types'
import  CustomButton  from './CustomButton'
import { updateSearchParams}  from '@/utils'


const ShowMore = ({pageNumbers, isNext}: ShowMoreProps) => {

    const router = useRouter()
    const handleNavigation = () =>{
        const newLimit = (pageNumbers + 1) * 8
        const newPathName = updateSearchParams("limit", `${newLimit}`);
        router.push(newPathName , {scroll: false})
    }        
    return (
        <div className='w-full gap-5 flex-center mt-10'>
        {!isNext && (
            <CustomButton
                title='Show More'
                btnType= 'button'
                containerStyles= "bg-primary-blue rounded-full text-white"
                handleClick = {handleNavigation} 
            />
        )}
        </div>
  )
}

export default ShowMore