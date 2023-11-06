import './App.css';
import ProductDetails from './ProductDetails/ProductDetails'
import Navbar from './Navbar/Navbar';
import About from './Components/About';
import Contact from './Components/Contact';
import Products from './Products/Products'
import Sidebar from './Sidebar/Sidebar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import products from './db/data';

function App() {

  const [search, setSearch] = useState('')
  const [results, setResults] = useState('')
  const [category, setCategory] = useState('')

  const [nav, setNav] = useState('')

  useEffect(() => {
    const filteredProducts = products.filter(product => (
      product.title.toLowerCase().includes(search.toLowerCase())
    ))

    setResults(filteredProducts)

  }, [products, search])

  const hundleCategoryCheck = (e) => {
    setCategory(e.target.value)
  }

  const shownav = () => {
    setNav('active')
  }
  const closenav = () => {
    setNav('')
  }

  return (
    <>
      <Router>
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
        <Routes>
          <Route path = 'about' element = {<About />} />
          <Route path = 'contact' element = {<Contact />} />
          <Route path = '/' element = {<Products products = {results} />} />
          <Route path = 'products/:id' element = {<ProductDetails
          products = {products} 
           />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
