import './Products.css'
import ProductCard from './ProductCard'

const Products = ({products}) => {
  return (
    <div className="main products_container">
      {
        products.length ? (
          <ProductCard products = {products} />
        ) : (
          <div className="main">
            <h1>Missing</h1>
          </div>
        )
      }

    </div>
  )
}

export default Products