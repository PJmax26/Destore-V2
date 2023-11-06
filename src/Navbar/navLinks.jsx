import './Navbar.css'
import { Link } from 'react-router-dom'

const NavLinks = () => {
  return (
    <ul className='navLinks'>
      <Link className='link active' to='/'>Products</Link>
      <Link className='link' to='about'>About Us</Link>
      <Link className='link' to='contact'>Contact Us</Link>
    </ul>
  )
}

export default NavLinks