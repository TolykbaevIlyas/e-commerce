"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

interface IHeader {

}

const Header = ({}:IHeader) => {
  const Path = usePathname();
  console.log(Path)
  return (
    <header className="flex justify-between w-full items-center pt-10 pb-10">
      <div>
        <Image alt="Logo" src=""/>
      </div>
      <nav className="flex justify-between items-center ">
        { Path === "/" ? 
          <div className="ml-10">
            <Link href="/">Home</Link>
            <div className="border-b-2 border-white"></div>
          </div> 
          :
          <div className="ml-10 ">
            <Link href="/">Home</Link>
          </div>
        }
        <div className="ml-10 hover:pb-2 duration-100 hover:underline">
          <Link href="/">Products</Link>
        </div>
        <div className="ml-10 hover:pb-2 duration-100 hover:underline">
          <Link href="/">Forum</Link>
        </div>
      </nav>
      <div className="flex">
        <Image alt="Cart" src=""/>
        <Image alt="favorite" src=""/>
      </div>
      <div>
        <Image alt="Profile" src=""/>
      </div>
    </header>
  )
}

export default Header