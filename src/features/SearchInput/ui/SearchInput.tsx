import { Input } from "@/shared/ui/Input"

const SearchInput = () => {
  return (
    <div className="flex justify-center mt-5">
      <Input className="text-center text-lg items-center m-auto w-96 p-2 rounded-lg text-black shadow-xl" placeholder="Enter product name"/>
    </div> 
  )
}

export default SearchInput