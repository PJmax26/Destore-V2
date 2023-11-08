import './App.css';
import ProductDetails from './ProductDetails/ProductDetails'
import Home from './Components/Home/Home';
import Contact from './Components/Contact';
import Main from './Main';
import Missing from './Components/Missing';

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
        <Routes>
          <Route path = '/products' element = {
            <Main 
            shownav = {shownav}
            search = {search}
            setSearch = {setSearch}
            hundleCategoryCheck = {hundleCategoryCheck}
            category = {category}
            setCategory = {setCategory}
            nav = {nav}
            closenav = {closenav}
            products = {results}
          />
          } />
          <Route path = '/' element = {<Home />} />
          <Route path = '/contact' element = {<Contact />} />
          <Route path = '/products/:id' element = {
          <ProductDetails
            products = {products}
            shownav = {shownav}
           />} />
           <Route path = '*' element = {<Missing />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
