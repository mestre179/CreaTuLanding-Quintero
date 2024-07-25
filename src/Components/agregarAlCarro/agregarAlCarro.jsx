import React, { useContext } from 'react'
import { CartContext } from '../CartWidget/CartWidgetContext';
import Button from 'react-bootstrap/Button';




const AgregarAlCarro = ({id, nombre, img, precio, count, stock}) => {
    const [ cart, setCart, stocks, setStocks ] = useContext(CartContext); 


    const agregar = () => {
             
        setCart((itemActual) => { 
          const itemEncontrado = itemActual.find((item) => item.id === id)
            if(itemEncontrado){
              return itemActual.map((item) => {
                if(item.id===id) {
                  if(item.cantidad < stock) { 
                    if (item.cantidad + count > stock) {
                      return (
                        {...item, cantidad: stock}
                      )
                    } 
                    else {
                  return {...item, cantidad: item.cantidad + count}}
                } else {
                  return item
                }
                } else {
                  return item
                }
            })
            } else {
              return [...itemActual, { id, cantidad: count, precio, img, nombre }]
            }
        })
      }


  return (
    <Button style={{marginLeft:'14%'}} variant="primary" onClick={() => agregar()}>Añadir al Carrito</Button>
  )
}

export default AgregarAlCarro