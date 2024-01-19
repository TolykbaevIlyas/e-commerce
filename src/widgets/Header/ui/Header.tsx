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
      <div className="pl-5">
        <p>e-commerce</p>
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
        {
          Path === "/Products" ?
          <div className="ml-10 hover:pb-2 duration-100 hover:underline">
            <Link href="/Products">Products</Link>
            <div className="border-b-2 border-white"></div>
          </div>
          :
          <div className="ml-10 hover:pb-2 duration-100 hover:underline">
            <Link href="/Products">Products</Link>
          </div>
        }
        {
          Path === "/Forum" ?
          <div className="ml-10 hover:pb-2 duration-100 hover:underline">
            <Link href="/Forum">Forum</Link>
            <div className="border-b-2 border-white"></div>
          </div>
          :
          <div className="ml-10 hover:pb-2 duration-100 hover:underline">
            <Link href="/Forum">Forum</Link>
          </div>
        }
      </nav>
      <div className="flex">
        <p className="pl-5">Cart</p>
        <p className="pl-5">Favourite</p>
      </div>
      <div>
        <p className="pr-5">Profile</p>
      </div>
    </header>
  )
}

export default Header