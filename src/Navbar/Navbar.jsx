import './Navbar.css'
import Logo from './logo'
import NavLinks from './navLinks'
import User from './User'

const Navbar = ({shownav}) => {
  return (
    <header>
      <div className="menu_btn"
        onClick={shownav}
      >&#9776;</div>
      <Logo />
      <NavLinks />
      <User />
    </header>
  )
}

export default Navbar