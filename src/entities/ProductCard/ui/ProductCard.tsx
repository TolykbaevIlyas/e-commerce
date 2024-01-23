import { Button } from "@/shared/ui/button";

interface IProductCard {
  title: string;
  description: string;
  link?:string;
}

const ProductCard = ({title,description,link}: IProductCard) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl ml-20 mt-5">
      <figure>
        <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Button>Buy Now</Button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard