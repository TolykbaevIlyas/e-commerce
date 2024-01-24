import { Input } from "@/shared/ui/Input"
import { Button } from "@/shared/ui/button"

const SearchInput = () => {
  return (
    <div >
      <div className="flex justify-center pt-5">
        <Input className="text-center text-lg items-center w-96 p-2 rounded-lg text-black shadow-xl" placeholder="Enter product name"/>
        <Button className="items-center text-black shadow-xl ml-5">Search</Button>
      </div>
    </div> 
  )
}

export default SearchInput