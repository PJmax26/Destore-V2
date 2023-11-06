import { useParams } from 'react-router-dom'
import './ProductDetails.css'
import { Link } from 'react-router-dom'
import Ratings from '../Components/Ratings'

const ProductDetails = ({products}) => {

  const {id} = useParams()
  const product = products.find(product => (product.id).toString() === id)

  return (
    <div className="main product_details">
      <div className="top">
        <img src={product.img} alt="Img" />

        <div className="right">
        <div className="product_text">
          <div className="title">{product.title}</div>
          <div className="price">
            $
            <del>{product.preprice}</del>
            <div className="new_price">{product.newprice}</div>
          </div>
          <div className="description">{product.description}</div>
        </div>

        <div className="actions">
          <div className="btn">Add to cart</div>
          <div className="heart">h</div>
          <div className="share">s</div>
        </div>
      </div>

      </div>

      <div className="bottom">
      <div className="related">
          <h2>Related Products</h2>
          {
            products.map(({id, img, title, preprice, newprice, description, category}) => (
              category === product.category ? (
                <Link to={`/products/${id}`}>
                  <div className='product' key={id} id={id}>
                    <img src={img} alt=""/>
                    <div className="product_info">
                      <div className="title">{title}</div>
                      <div className="price">
                        $
                        <del>{preprice}</del>
                        <span className='new_price'>{newprice}</span>
                      </div>
                      <div className="description">{
                        description.length > 70 ? description.slice(0, 70) + '...' : description
                      }</div>
                    </div>
                  </div>
              </Link>
              ) : (
                <></>
              )
            ))
          }
        </div>
      </div>

      
    </div>
  )
}

export default ProductDetails