import './general.css'
import Products from './Products'
import Product from './Product'
import CreateProduct from './CreateProduct'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

function App() {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/products' element={<Products/>}/>
          <Route path='/products/:id' element={<Product/>}/>
          <Route path='/create-product' element={<CreateProduct/>}/>
          <Route path='*' element={<Navigate to="/products" replace/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
