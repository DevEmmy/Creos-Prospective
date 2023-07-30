import Image from 'next/image'
import Link from 'next/link'
import Button from "./Button"
import React from 'react'

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
  return (
    <>
        <nav className='bg-primary6 w-full flex justify-between items-center py-[20px] px-xpadding'>
            <Link href="/" className="w-[15em]">
              <Image src="/homeLogo.svg" width={100} height={100} alt="CSkidz" />
            </Link>

            <div className='flex gap-[60px]'>
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

            <div className='w-fit flex gap-6'>
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
        </nav>
    </>
  )
}

export default NavBar