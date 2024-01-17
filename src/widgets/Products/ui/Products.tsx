import { ProductCard } from "@/entities/ProductCard"

interface IProducts {

}

const Products = ({}:IProducts) => {
  const Prod = [
    {
      id:1,
      name:"Buts",
      desc: "Product"
    }
  ]
  return (
    <div>
      Products
      {Prod.map(()=><ProductCard/>)}
    </div>
  )
}

export default Products