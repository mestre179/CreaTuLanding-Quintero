import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const ItemListRedirect = () => {
  return (
    <div style={{marginLeft:'5%', marginTop: '15px'}}>
        <Link to='/'><Button style={{margin:'10px'}}>Seguir Comprando</Button></Link>
        <Link to='/cart'><Button>Ir Al Carrito</Button></Link>
    </div>
  )
}
