import React, { createContext, useState } from 'react'

export const CartContext = createContext(null)

export const CartWidgetProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [ stocks, setStocks] = useState(0)
    const [ totalPrice, setTotalPrice] = useState(0)
    

    

    
  return (
    <CartContext.Provider value={[cart, setCart, stocks, setStocks, totalPrice, setTotalPrice]} >
        {children}
    </CartContext.Provider>
  )
}
