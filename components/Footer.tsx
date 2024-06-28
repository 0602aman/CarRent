import React from 'react'
import Image from 'next/image'
//import {FaFacebook, FaInstagram, FaTwitter, FaLinkedin} from 'react-icons/fa'
import Link from 'next/link'
import {footerLinks} from "@/constants"

const Footer = () => {
  return (
        <footer className='flex flex-col mt-5 text-black-100 border-t border-gray-100'>
            <div className='flex max-md: flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10 '>
                <div className='flex flex-col justify-start items-start gap -6'>
                    <Image src="/logo.svg"
                    alt='CarRent Logo'
                    width={118}
                    height={18}
                    className='object-contain'
                    />
                    <p className=' text-gray-700 text-sm mt-2'>
                        CarRent 2024 <br />
                        All rights reserved &copy;
                    </p>
                </div>
                <div className='footer__links'>
                    {footerLinks.map((link)=>(
                        <div key={link.title} className='footer__link'>
                            <h3 className='font-bold'>{link.title}</h3>
                            {link.links.map((item)=>(
                                <Link key={item.title} 
                                href={item.url}
                                className='text-gray-500'>
                                {item.title}
                                </Link>

                            ))}

                        </div>
                    ))}

                </div>
                </div>
                <div className='flex flex-wrap justify-between items-center mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
                    <p className='text-gray-500 text-sm'>
                        &copy; 2024 CarRent. All rights reserved
                    </p>
                    <div className='flex gap-3 text-gray-500 text-sm'>
                        <Link href='/'>Privacy Policy</Link>
                        <Link href='/'>Terms of Service</Link>
                    </div>
                </div>
        </footer>
  )
}

export default Footer