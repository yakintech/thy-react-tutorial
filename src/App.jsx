import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import SupplierList from './pages/SupplierList'
import SupplierDetail from './pages/SupplierDetail'
import Intro from './effectSample/Intro'
import ProductsTable from './apiSamples/ProductsTable'
import AddProduct from './apiSamples/AddProduct'
import IntervalEffect from './effectSample/IntervalEffect'
import CategoriesTable from './apiSamples/CategoriesTable'
import SuppliersTable from './react-query/SuppliersTable'

function App() {



  return <>
    <ul style={{display:'flex', justifyContent:"space-between"}}>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
      <li><Link to='/suppliers'>Suppliers</Link></li>
      <li><Link to='/products/add'>Add Product</Link></li>
      <li><Link to='/interval'>Interval</Link></li>
      <li><Link to='/categories'>Categories</Link></li>
      <li><Link to='/supplierstable'>Suppliers Table -  React Query</Link></li>

    </ul>
    <hr />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/home' element={<HomePage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/suppliers' element={<SupplierList/>} />
      <Route path='/suppliers/:id' element={<SupplierDetail/>} />
      <Route path='/products/add' element={<AddProduct/>} />
      <Route path='/interval' element={<IntervalEffect/>} />
      <Route path='/categories' element={<CategoriesTable/>} />
      <Route path='/supplierstable' element={<SuppliersTable/>} />
    </Routes>
    <hr />
    <h1>Site Footer</h1>
  </>
}

export default App