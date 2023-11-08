import './Home.css'
import hoodieRed from '../../asserts/h-red-bg.png'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section className="about" id="about">
        <div className="about__fig">
            <img src={hoodieRed} alt=""/>
        </div>
        <div className="about__text">
            <h1>Explore DeStore Now...</h1>
            <h3>About Us</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, praesentium provident? Saepe incidunt rem praesentium dicta deserunt unde, nisi, ab, neque quaerat expedita eligendi quasi ipsam est eos. Qui blanditiis dolore totam! Quae repellendus eveniet magni eum maiores distinctio repudiandae. Ipsa unde aspernatur voluptate error. Veritatis dolores eos in voluptatum.
            </p>
            <Link to='/products' className="btn2">Explore Our Products</Link>
        </div>
    </section>
  )
}

export default About