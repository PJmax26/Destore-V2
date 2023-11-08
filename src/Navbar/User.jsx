import {AiOutlineShoppingCart, AiOutlineUserAdd} from 'react-icons/ai'

const User = () => {
  return (
    <div className="user">
      <div className="cart">
        <span>7</span>
        <AiOutlineShoppingCart className='icon' />
      </div>
      <AiOutlineUserAdd className='icon' />
    </div>
  )
}

export default User