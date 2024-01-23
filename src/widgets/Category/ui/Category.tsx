import { ProductCard } from "@/entities/ProductCard"

interface IProducts {

}

const Category = ({}:IProducts) => {
  const Prod = [
    {
      id:1,
      name:"Buts",
      desc: "Product"
    },
    {
      id:2,
      name:"Butsss",
      desc: "Productsss"
    }
  ]
  return (
    <div className="flex flex-wrap">
      {Prod.map((prod)=><ProductCard title={prod.name} description={prod.desc}/>)}
    </div>
  )
}

export default Category