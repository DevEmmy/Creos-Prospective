import Image from 'next/image'
import Link from 'next/link'
import Button from "./Button"
import React from 'react'

const NavBar = () => {
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
      link: "/contact-us"
    }
  ]
  return (
    <>
        <nav className='bg-primary6 w-full'>
            <Link href="/" className="w-[15em]">
              <Image src="/logo.png" width={100} height={100} alt="CSkidz" />
            </Link>

            <div>
              {
                nav.map((item, i)=>{
                  return(
                    <Link href={item.link} key={i}>
                      {item.title}
                    </Link>
                  )
                })
              }
            </div>

            <div className='w-full'>
              <Button className="rounded-[2em] p-[1em] text-primary1 border border-black">
                Create Free Account
              </Button>

              <button className="rounded-full bg-primary1 px-[2em] py-[1em] text-white">
                Login
              </button>
            </div>
        </nav>
    </>
  )
}

export default NavBar