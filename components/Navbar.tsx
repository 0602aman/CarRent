import React from 'react'
import Image from 'next/image'
import CustomButton from './CustomButton'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
        <header className='w-full absolute z-10'>
            <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
                <Link href="/" className='flex justify-between items-center shadow-2xl'>
                    <Image src = "/logo.svg"
                        alt='CarRent Logo'
                        width={118}
                        height={18}
                        className='object-contain'>
                         </Image>
                     </Link>
                     <CustomButton 
                       title="Sign In"
                       btnType="button"
                       containerStyles="text-primary-blue bg-white shadows rounded-full min-w-[130px] text-lg" />

            </nav>

        </header>
    </div>
  )
}

export default Navbar