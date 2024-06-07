import { MdShoppingCart } from "react-icons/md";
import './CartWidget.css'

const CartWidget = () => {
    
    return(
        <>
            <h1 className="car">
                <span className="bubble">
                    <span className="bubbleAlert">
                        1
                    </span>
                </span>
                <button className="button"><MdShoppingCart /></button>
            </h1>
            
        </>
    )

    
}

export default CartWidget