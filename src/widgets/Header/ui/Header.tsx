import Image from "next/image"
import Link from "next/link"

interface IHeader {

}

const Header = ({}:IHeader) => {
  return (
    <header className="flex justify-between w-full items-center">
      <div>
        <Image alt="Logo" src=""/>
      </div>
      <nav className="flex justify-between">
        <div className="">
          <Link href="">Home</Link>
        </div>
        <div className="">
          <Link href="">Products</Link>
        </div>
        <div className="">
          <Link href="">Forum</Link>
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