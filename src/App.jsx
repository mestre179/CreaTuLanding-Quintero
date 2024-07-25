
import './App.css'
import NavBar from "./Components/NavBar/NavBar"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"
import { CartWidgetProvider } from './Components/CartWidget/CartWidgetContext'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ItemListDetails from './Components/ItemListDetails/ItemListDetails'
import Cart from './Components/Cart/Cart'
import PageNotFound from './Components/PageNotFound/PageNotFound'
import Checkout from './Components/Cart/Checkout'



function App() {
  
return (
    <CartWidgetProvider>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<ItemListContainer label={"Virtgold"}/>} />
          <Route path='/categorias/:categoryID' element={<ItemListContainer label={"Categories"}/>} />
          <Route path='/producto/:productID' element={<ItemListDetails/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/checkout' element={<Checkout/>} />
          <Route path="/notfound" element={<PageNotFound />} />
          <Route path='*' element={<Navigate to="/notfound" replace />} />
        </Routes>
      </BrowserRouter>
    </CartWidgetProvider>
  )
}

export default App
