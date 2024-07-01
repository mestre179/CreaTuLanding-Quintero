import React from 'react'
import { Link } from 'react-router-dom'

export default function DetallesCarro({carro}) {
  return (
    <div className='detallesCarro'>
        <ul>    
            {carro.map(x =>
                <li className='producto' key={x.id}>
                    <img alt={x.nombre} src={x.img} width='50' height='32'></img>
                    {x.nombre} <span>{x.cantidad}</span>
                </li>
            )}
        </ul>
        <Link to='/cart'>{carro.length ? <button className='producto checkout'><b>Checkout</b></button> : null}</Link>
    </div>
  )
}
