import './general.css'
import Products from './Products'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/products' element={<Products/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
