import React, { useContext } from 'react'
import Table from 'react-bootstrap/Table';
import { CartContext } from '../CartWidget/CartWidgetContext';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [ cart, setCart, totalPrice, setTotalPrice ] = useContext(CartContext)
  

  const removeItem = (id) => {
    const updatedCart = cart.filter((prod) => prod.id !== id)
    setCart(updatedCart)
}

const getTotalPrice = () => {
  setTotalPrice(cart.reduce((actual, item) => actual + item.precio * item.cantidad, 0))
  return totalPrice
}  

const clearCart = () => {
  setCart([])
}
  
  if (cart.length === 0){
    return (
      <>
      <h1 style={{color: 'white', display: 'flex', justifyContent: 'center', marginTop: '10%'}}>Carrito Vacio</h1>
      <Link to='/'><Button style={{marginLeft: '40%', marginTop: '2%', width:'350px', backgroundColor: '#f1d566', color:'black'}} size="lg">Ir a Comprar</Button></Link>
      </>
    ) } 
    else {
  return (
    <>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th></th>
          <th>Producto</th>
          <th>cantidad</th>
          <th>precio por unidad</th>
          <th>subtotal</th>
          <th>
            
          </th>
        </tr>
      </thead>
      <tbody>
      {
        cart.map((prod) => (
        <tr key={prod.id}>
          <td><img alt={prod.nombre} src={prod.img} width='50' height='32'></img></td>
          <td>membresia de {prod.nombre}</td>
          <td>{prod.cantidad}</td>
          <td>{prod.precio}$</td>
          <td>{prod.cantidad * prod.precio}$</td>
          <td>{
              <Button onClick={() => removeItem(prod.id)}>borrar</Button>
            }</td>
        </tr>
         
        ))
      }
      </tbody>
    </Table>

    <h1 style={{color: 'white'}}>Total a cancelar: ${getTotalPrice()}</h1>
    <div className="d-grid gap-2 ">
    <Button style={{width:'150px'}} variant="secondary" onClick={() => clearCart()}>Vaciar el carrito</Button>
    <Link to='/checkout'><Button style={{marginLeft: '40%', width:'350px'}} size="lg">Checkout</Button></Link>
    </div>
  </>
  )
}}

export default Cart
