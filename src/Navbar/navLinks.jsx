import './Navbar.css'
import { Link } from 'react-router-dom'

const NavLinks = () => {
  return (
    <ul className='navLinks'>
      <Link className='link' to='/'>Home</Link>
      <Link className='link' to='/products'>Products</Link>
      <Link className='link' to='/contact'>Contact Us</Link>
    </ul>
  )
}

export default NavLinks