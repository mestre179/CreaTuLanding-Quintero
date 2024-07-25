import { Button } from 'react-bootstrap'
import useCounter from '../../Hooks/useCounter'
import AgregarAlCarro from '../agregarAlCarro/agregarAlCarro'



const ItemCount = ({initialValue, stock, id, nombre, img, precio}) => {
    const { count, incrementar, decrementar } = useCounter(initialValue, stock)
    
 
    return (
      
    <div>
        <Button style={{marginRight:'5%'}}onClick={decrementar}>-</Button>
        <span>{count}</span>
        <Button style={{marginLeft:'5%'}}onClick={incrementar}>+</Button>
        <AgregarAlCarro id={id} nombre={nombre} img={img} precio={precio} count={count} stock={stock}></AgregarAlCarro>
    </div>
  ) }


export default ItemCount