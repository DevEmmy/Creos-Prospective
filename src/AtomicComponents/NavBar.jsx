'use client'

import Image from 'next/image'
import Link from 'next/link'
import Button from "./Button"
import React, { useState } from 'react'
import { RiMenuFill } from 'react-icons/ri'
import { HiX} from 'react-icons/hi'

const NavBar = ({active=0}) => {
  const nav = [
    {
      title: "Home",
      link: "/"
    },
    {
      title: "About",
      link: "/about"
    },
    {
      title: "Contact Us",
      link: "/contact"
    }
  ]

  const [showNav, setShowNav] = useState(false)
  return (
    <>
        <nav className='bg-primary6 w-full flex justify-between items-center py-[20px] px-xpadding'>
            <Link href="/" className="w-[15em] sm:w-[13em]">
              <Image src="/homeLogo.svg" width={100} height={100} alt="CSkidz" />
            </Link>

            <div className='flex gap-[60px] sm:hidden'>
              {
                nav.map((item, i)=>{
                  return(
                    <Link href={item.link} key={i} className={active == i ? "font-[800] text-primary1 text-[0.8em]": "text-[0.8em]"}>
                      {item.title}
                    </Link>
                  )
                })
              }
            </div>

            <div className='w-fit flex gap-6 sm:hidden'>
              <Link href={"/signup"}>
                <Button className="rounded-[2.2em] border-2 border-primary1 bg-transparent px-[2.5em] py-[1em] text-[0.8em] text-primary1 font-[600]" >
                  Create Free Account
                </Button>
              </Link>
              

              <Link href="/signin">
               <Button className="rounded-[2em] bg-primary1 px-[2.5em] py-[1em] text-[0.8em] font-[600] text-white">
                Login
              </Button>
              </Link>
             
            </div>

            <div className="md:hidden">
              {
                showNav ?
                <HiX size={24} onClick={()=>{setShowNav(false)}}/>
                :
                <RiMenuFill size={24} onClick={()=>{setShowNav(true)}}/>
              }
            </div>

            <div className={`fixed top-[70px] w-full md:hidden bg-primary6 h-full p-xpadding ${showNav? "left-0" : "left-[100%]"}`} >
            <div className='flex gap-6 flex-col'>
              {
                nav.map((item, i)=>{
                  return(
                    <Link href={item.link} key={i} className={active == i ? "font-[800] text-primary1 text-[0.8em]": "text-[0.8em]"}>
                      {item.title}
                    </Link>
                  )
                })
              }
            </div>

            <div className='w-fit flex gap-6 mt-10'>
              <Link href={"/signup"}>
                <Button className="rounded-[2em] border-2 border-primary1 bg-transparent px-[2em] py-[0.6em] text-[0.8em] text-primary1 font-[600]" >
                  Create Free Account
                </Button>
              </Link>
              

              <Link href="/signin">
               <Button className="rounded-[2em] bg-primary1 px-[2.5em] py-[0.7em] text-[0.8em] font-[600] text-white">
                Login
              </Button>
              </Link>
             
            </div>
            </div>
        </nav>
    </>
  )
}

export default NavBar