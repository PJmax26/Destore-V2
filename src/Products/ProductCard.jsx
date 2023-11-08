import './Products.css'
import Ratings from '../Components/Ratings'
import { Link } from 'react-router-dom'
import {AiFillHeart} from 'react-icons/ai'

const ProductCard = ({products}) => {
  return (
      products.map(({id, img, title, preprice, newprice, description}) => (
        <div className='product_card' key={id} id={id}>
          <Link to={`/products/${id}`} className='link'>
            <img src={img} alt="" className="product_img" />
            <div className="product_info">
              <div className="product_title">{title}</div>
              <div className="product_price">
                $
                <del>{preprice}</del>
                <span className='new_price'>{newprice}</span>
              </div>
              <div className="product_description">{description.length > 70 ? description.slice(0, 70) + '...' : description}</div>
            </div>
          </Link>
          <div className="ratings">
            <Ratings />
            {/* <AiFillHeart className='icon'/> */}
          </div>
        </div>
        
      ))
    )
  }

export default ProductCard