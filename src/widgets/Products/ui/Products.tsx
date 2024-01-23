import { ProductCard } from "@/entities/ProductCard"

const Products = () => {
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
        },
        {
            id:3,
            name: "Butter",
            desc: "Product"
        },
        {
            id:4,
            name:"Buts",
            desc: "Product"
          },
          {
            id:5,
            name:"Butsss",
            desc: "Productsss"
          },
          {
            id:6,
            name: "Butter",
            desc: "Product"
          }
      ]
  return (
    <div className="">
        <h2 className="text-center text-2xl"> Products</h2>
        <div className="flex mt-10 flex-wrap">
            {Prod.map((prod)=><ProductCard title={prod.name} description={prod.desc}/>)}
        </div>
        
    </div>
  )
}

export default Products
