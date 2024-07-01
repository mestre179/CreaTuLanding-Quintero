import { MdShoppingCart } from "react-icons/md";
import './CartWidget.css'
import { useContext, useState } from "react";
import { CartContext } from "./CartWidgetContext";
import { BubbleAlert } from "./BubbleAlert";
import DetallesCarro from "./DetallesCarro";

const CartWidget = () => {

    const [ cart, setCart] = useContext(CartContext)

    const cantidad = cart.reduce((acc, actual) => {
        return acc + actual.cantidad
    }, 0)

    const [ mostrar, setMostrar ] = useState(false)
    
    const mostrarCarro = () => {
        if(mostrar === false) {
            return setMostrar(true)
        } 
        setMostrar(false)
    }
   
    return(
        <>
            <h1 className="car">
                <span className="bubble">
                  {cantidad !== 0 ? <BubbleAlert value= {cantidad} /> : null}
                </span>
                <button className="button" onClick={mostrarCarro}><MdShoppingCart /></button>
                {mostrar ? <DetallesCarro carro={cart} /> : null}
            </h1>
            
        </>
    )

    
}

export default CartWidget