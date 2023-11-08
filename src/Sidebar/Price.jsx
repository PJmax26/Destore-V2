import './Sidebar.css'

const Price = () => {
  return (
    <div className="category">
        <div className="sidebar_title">Price</div>

        <div className='item_category_filter' >
            <label className="sidebar_label_container">
                <input type="radio" name='gender_choise'/>
                <span className='checkmark'></span>Below $50
            </label>

            <label className="sidebar_label_container">
                <input type="radio" name='gender_choise' />
                <span className='checkmark'></span>$50 - $100
            </label>

            <label className="sidebar_label_container">
                <input type="radio" name='gender_choise' />
                <span className='checkmark'></span>$100 - $150
            </label>

            <label className="sidebar_label_container">
                <input type="radio" name='gender_choise' />
                <span className='checkmark'></span>$150 - $200
            </label>

            <label className="sidebar_label_container">
                <input type="radio" name='gender_choise' />
                <span className='checkmark'></span>Above $200
            </label>
        </div>
    </div>
  )
}

export default Price