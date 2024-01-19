"use client"

import { FavModal } from "@/features/FavModal"
import { Button } from "@/shared/ui/button"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"

interface IHeader {

}

const Header = ({}:IHeader) => {
  const Path = usePathname();
  const [FavModalStatus, setFavModalStatus] = useState(false);
  const [CartModalStatus, setCartModalStatus] = useState(false);
  console.log(FavModalStatus)    
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
          <div className="ml-10 hover:pb-2 duration-100 hover:underline">
            <Link href="/">Home</Link>
          </div>
        }
        {
          Path === "/Products" ?
          <div className="ml-10 hover:pb-2 duration-100 ">
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
          <div className="ml-10 hover:pb-2 duration-100 ">
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
        <Button 
          type="button"
          onClick={() => setFavModalStatus(!FavModalStatus)}
          className="ml-5">
          Favorite
        </Button>
        {
          FavModalStatus === true ?
            <FavModal FavModalStatus={FavModalStatus} setFavModalStatus={() => setFavModalStatus()}/>
          :
            null
        }
        <Button
          type="button"
          onClick={()=> setCartModalStatus(!CartModalStatus)}
          className="ml-5">
          Cart
        </Button>
      </div>
      <div>
        <Button
          type="button"
          className="mr-5">
          Profile
        </Button>
      </div>
    </header>
  )
}

export default Header