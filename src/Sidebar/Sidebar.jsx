import './Sidebar.css'
import Category from './Category'
import Price from './Price'
import Gender from './Gender'

const Sidebar = ({ search, setSearch, category, setCategory, hundleCategoryCheck, nav, closenav }) => {
  return (
    <>
        <aside className={`sidebar ${nav}`}>
          <div className="close_btn"
            onClick={closenav}
          >&times;</div>
            <input type="text"
            className='search_input'
            placeholder='search all products'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
            
            <Category 
            hundleCategoryCheck = {hundleCategoryCheck}
            category = {category}
            setCategory = {setCategory}
            />
            <Gender />
            <Price />
        </aside>
    </>
    
  )
}

export default Sidebar