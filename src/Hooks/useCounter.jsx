import React, { useContext, useState } from 'react'
import { CartContext } from '../Components/CartWidget/CartWidgetContext'

const useCounter = (initialValue, stock) => {
    const [ count, setCount ] = useState(initialValue)
    
         
    const incrementar = () => {
        if (stock <= 10) {
       count < stock && setCount(count + 1)
        } else {
            count < 10 && setCount(count + 1) 
        }
    }
    const decrementar = () => {
        count > initialValue && setCount(count - 1)
    }
    return {count, incrementar, decrementar}
}

export default useCounter