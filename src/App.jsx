import React, { useContext } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import SupplierList from './pages/SupplierList'
import SupplierDetail from './pages/SupplierDetail'
import AddProduct from './apiSamples/AddProduct'
import IntervalEffect from './effectSample/IntervalEffect'
import CategoriesTable from './apiSamples/CategoriesTable'
import SuppliersTable from './react-query/SuppliersTable'
import MuiGridSample from './mui/MuiGridSample'
import ProductsGrid from './mui/ProductsGrid'
import ProductDetail from './mui/ProductDetail'
import Cart from './pages/Cart'
import { cartContext } from './context/CartContext'
import RefSample from './forwardRefSample/RefSample'

function App() {

  const { cart } = useContext(cartContext)

  return <RefSample/>

  return <>
    <ul style={{ display: 'flex', justifyContent: "space-between" }}>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/products'>Products Grid</Link></li>
      <li><Link to='/cart'>Cart <span style={{color:'red'}}>({cart.length})</span></Link></li>


    </ul>
    <hr />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/home' element={<HomePage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/suppliers' element={<SupplierList />} />
      <Route path='/suppliers/:id' element={<SupplierDetail />} />
      <Route path='/products' element={<ProductsGrid />} />
      <Route path='/products/:id' element={<ProductDetail />} />
      <Route path='/products/add' element={<AddProduct />} />
      <Route path='/interval' element={<IntervalEffect />} />
      <Route path='/categories' element={<CategoriesTable />} />
      <Route path='/supplierstable' element={<SuppliersTable />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
    <hr />
    <h1>Site Footer</h1>
  </>
}

export default App