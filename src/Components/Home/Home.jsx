import { Link } from 'react-router-dom';
import './Home.css'
import Nike from '../../asserts/nike-bg.png'
import featured from '../../db/featured';
import { AiFillStar } from "react-icons/ai";
import About from './About';

const Home = () => {

  return (
    <>
      <section className='header'>
        <nav className='nav_bar'>
          <div className="logo">
            D
            <span>S</span>
          </div>
          <ul className="nav_links">
            <Link className='link' to='/products'>Products</Link>
            <Link className='link' to='/contact'>Contact Us</Link>
          </ul>
          <div></div>
        </nav>

        <section className="hero hero-1" id="hero">
            <div className="hero_text">
                <h3>Do it now. run on air</h3>
                <h1>Flexing Snicks</h1>
                <Link to="/products/12" className="btn2">Get Now</Link>
            </div>

            <div className="hero_fig">
                <img src={Nike} alt=""/>
            </div>
        </section>
      </section>

      
      <section className="featured" id="featured">
          <h3>Featured Products</h3>
          <div className="products__container">
            {
              featured.map(({id, img, newprice}) => (
                <div className="product">
                  <img src={img} alt=''/>
                  <div className="stars">
                    <AiFillStar className="star"/>
                    <AiFillStar className="star"/>
                    <AiFillStar className="star"/>
                    <AiFillStar className="star"/>
                    <AiFillStar className="star"/>
                  </div>
                  <h4>${newprice}</h4>
              </div>
              ))
            }
          </div>
        </section>

        <About />
    </>
  )
}

export default Home;