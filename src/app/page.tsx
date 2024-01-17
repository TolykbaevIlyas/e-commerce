
import { Carousel } from "@/widgets/Carousel"
import { Products } from "@/widgets/Products"

interface IHomePage {

}

const HomePage = ({}:IHomePage) => {
  return (
    <main>
      <Carousel/>
      <Products/>
    </main>
  )
}

export default HomePage