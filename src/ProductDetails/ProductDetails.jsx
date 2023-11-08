import { useParams } from 'react-router-dom'
import './ProductDetails.css'
import { Link } from 'react-router-dom'
import Ratings from '../Components/Ratings'
import {FiHeart} from 'react-icons/fi'
import {AiOutlineShareAlt} from 'react-icons/ai'
import Navbar from '../Navbar/Navbar'

const ProductDetails = ({products, shownav}) => {

  const {id} = useParams()
  const product = products.find(product => (product.id).toString() === id)

  return (
    <>
      <Navbar shownav = {shownav} />
      <div className="product_details">
      <div className="top">
        <img src={product.img} alt="Img" />

        <div className="right">
          <div className="product_text">
            <div className="title">{product.title}</div>
            <Ratings />
            <div className="price">
              $
              <del>{product.preprice}</del>
              <div className="new_price">{product.newprice}</div>
            </div>
            <div className="description">{product.description}</div>
          </div>

          <div className="actions">
            <div className="btn">Add to cart</div>
            <FiHeart className='icon'/>
            <AiOutlineShareAlt className='icon'/>
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
                  <div className='related_product' key={id} id={id}>
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
    </>
    
  )
}

export default ProductDetails