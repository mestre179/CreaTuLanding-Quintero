import React, { useEffect, useState } from 'react'
import useCounter from '../../Hooks/useCounter'
import AgregarAlCarro from '../agregarAlCarro/agregarAlCarro'


const ItemCount = ({initialValue, stock, id, nombre, img, precio}) => {
    const { count, incrementar, decrementar } = useCounter(initialValue, stock)


  
    return (
    <div>
        <button onClick={decrementar}>-</button>
        <span>{count}</span>
        <button onClick={incrementar}>+</button>
        <AgregarAlCarro id={id} nombre={nombre} img={img} precio={precio} count={count} stock={stock}></AgregarAlCarro>
    </div>
  )
}

export default ItemCount