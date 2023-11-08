import { Link } from "react-router-dom"

const Missing = () => {
  return (
    <div className="missing">
        <h1>OOPS... Can't find this page yopu are looking for</h1>
        <Link className='btn' to='/'>Go Home</Link>
        <Link className='btn' to='/products'>See Our Products</Link>
    </div>
  )
}

export default Missing