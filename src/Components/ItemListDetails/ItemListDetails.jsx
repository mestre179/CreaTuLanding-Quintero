import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getProduct, getProductsByID } from "../../data/asyncMock";
import ItemCount from "../ItemListContainer/ItemCount";
import { Oval } from "react-loader-spinner";



const ItemListDetails = () => {
    
    const [ productos, setProductos] = useState({})
    const [ loading, setLoading ] = useState(true)
    const { productID } = useParams()
    const navigate = useNavigate()
    

    useEffect(() => {
      if (productID <= 5) {
        getProductsByID(productID)
          .then((prod) => setProductos(prod))
          .catch((error) =>console.error())
          .finally(() => setLoading(false))
      } else {
        navigate('/notfound', {replace: true})
      }
    }, [navigate])
          
     return (
      <> {
        loading ? <Oval wrapperClass='item-list-loader' /> :
      <div className='item-list-head'> 
        <Card style={{ width: '305px', margin: '10px'}}>
          <Card.Img style={{ width: '301px', height: '350px'}} variant="top" src={productos.img} />
          <Card />
          <Card.Body>
            <Card.Title className="text-center">{productos.nombre}</Card.Title>
            <Card.Text className="text-center" style={{ width: '285px', height: '250px'}}>
              {productos.descripcion}
            </Card.Text>
            <Card.Title>
                {productos.precio}
            </Card.Title>
            <ItemCount id={productos.id} nombre={productos.nombre} img={productos.img} precio={productos.precio} initialValue={1} stock={productos.stock}></ItemCount>
          </Card.Body>
        </Card>
      </div> 
      }  
    </>
      );
}

export default ItemListDetails