import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import SupplierList from './pages/SupplierList'
import SupplierDetail from './pages/SupplierDetail'

function App() {


  return <>
    <ul style={{display:'flex', justifyContent:"space-between"}}>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
      <li><Link to='/suppliers'>Suppliers</Link></li>
    </ul>
    <hr />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/home' element={<HomePage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/suppliers' element={<SupplierList/>} />
      <Route path='/suppliers/:id' element={<SupplierDetail/>} />
    </Routes>
    <hr />
    <h1>Site Footer</h1>
  </>
}

export default App