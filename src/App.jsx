import { Routes,Route } from 'react-router-dom'
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Wishlist from "./pages/Wishlist"
import View from "./pages/View"
import Pnf from "./pages/Pnf"

import './App.css'

function App() {

  return (
    <>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/:id/view' element={<View />} />
        <Route path='/*' element={<Pnf />} />
      </Routes>

    </>
  )
}

export default App
