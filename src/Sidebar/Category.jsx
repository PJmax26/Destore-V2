import './Sidebar.css'

const Category = ({ hundleCategoryCheck, category, setCategory}) => {
  return (
    <div className="category">
        <div className="sidebar_title">Category</div>

        <div className='item_category_filter' >
            <label className="sidebar_label_container">
                <input type="radio" name='category_choise'/>
                <span className='checkmark'></span>All
            </label>

            <label className="sidebar_label_container">
                <input type="radio" name='category_choise' />
                <span className='checkmark'></span>Clothes
            </label>

            <label className="sidebar_label_container">
                <input type="radio" name='category_choise' />
                <span className='checkmark'></span>Foot Wears
            </label>

            <label className="sidebar_label_container">
                <input type="radio" name='category_choise' />
                <span className='checkmark'></span>Bags
            </label>
        </div>
    </div>
  )
}

export default Category