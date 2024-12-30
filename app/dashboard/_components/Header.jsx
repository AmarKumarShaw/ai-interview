"use client"
import { UserButton } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
import React,{useEffect} from 'react'

const Header = () => {

    const path =usePathname()
    useEffect(()=>{
        console.log(path)
    },[])
  return (
    <div className='flex py-4 text-md font-medium gap-4 justify-around items-center bg-gray-100 '>
        <div className='logo'>
        <p>Logo</p>
        </div>
        <div>
        <ul className='flex gap-4'>
        <li className={`cursor-pointer hover:text-primary hover:scale-110 transition ease-in-out ${path == "/dashboard" && "text-primary font-bold"}`}>Dashboard</li>
        <li  className={`cursor-pointer hover:text-primary hover:scale-110 transition ease-in-out ${path == "/questions" && "text-primary font-bold"}`}>Question</li>
        <li  className={`cursor-pointer hover:text-primary hover:scale-110 transition ease-in-out ${path == "/upgrade" && "text-primary font-bold"}`}>Upgrade</li>
        <li  className={`cursor-pointer hover:text-primary hover:scale-110 transition ease-in-out ${path == "/how"  && "text-primary font-bold"}`}>How it works</li>
        </ul>
        </div>
           <div>
           <UserButton />
           </div>

    </div>
  )
}

export default Header