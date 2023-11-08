import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';
import Products from './Products/Products'

const Main = ({ shownav, search, setSearch, hundleCategoryCheck, category, setCategory, nav, closenav, products}) => {
  return (
    <>
        <Navbar
        shownav = {shownav}
        />
        <Sidebar
          search = {search}
          setSearch = {setSearch}
          hundleCategoryCheck = {hundleCategoryCheck}
          category = {category}
          setCategory = {setCategory}
          nav = {nav}
          closenav = {closenav}
        />

        <Products products={products}/>
    </>
  )
}

export default Main