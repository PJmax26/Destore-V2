import './Sidebar.css'

const Gender = () => {
  return (
    <div className="category">
    <div className="sidebar_title"></div>

    <div className='item_category_filter' >
        <label className="sidebar_label_container">
            <input type="radio" name='gender_choise'/>
            <span className='checkmark'></span>Men
        </label>

        <label className="sidebar_label_container">
            <input type="radio" name='gender_choise' />
            <span className='checkmark'></span>Women
        </label>
    </div>
</div>
  )
}

export default Gender