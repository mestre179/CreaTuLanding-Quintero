import React, { createContext, useState } from 'react'

export const CartContext = createContext(null)

export const CartWidgetProvider = ({ children }) => {
    const [cart, setCart] = useState([])


  return (
    <CartContext.Provider value={[cart, setCart]} >
        {children}
    </CartContext.Provider>
  )
}
