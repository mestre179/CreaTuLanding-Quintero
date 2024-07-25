import React, { useContext, useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import { useNavigate, useParams } from "react-router-dom";
import ItemCount from "../ItemListContainer/ItemCount";
import { Oval } from "react-loader-spinner";
import { doc, getDoc} from "firebase/firestore";
import { db } from "../../config/firebase";
import { CartContext } from "../CartWidget/CartWidgetContext";
import { ItemListRedirect } from "./ItemListRedirect";
import { NoStock } from "./NoStock";



const ItemListDetails = () => {
    
    const [ productos, setProductos] = useState({})
    const [ loading, setLoading ] = useState(true)
    const { productID } = useParams()
    const navigate = useNavigate()
    const [ cart ] = useContext(CartContext)
    

    useEffect(() => {
      setLoading(true)
        const getDataById = async () => {
          const queryRef = doc(db, 'productos', productID)
          const response = await getDoc(queryRef)     
          const newItem = {
                ...response.data(),
                id: response.id
          }            
       
        if (newItem.nombre) {
        setProductos(newItem)
        setLoading(false)
        } else {
          navigate('/notfound', {replace: true})
        }
        }

      getDataById()
    }, [navigate])

    const cantidadByID = (id) => {
      return cart.find((item) => item.id === id)?.cantidad || 0
    } 

    const cantidad = cantidadByID(productos.id)

         
     return (
      <> {
        loading ? <Oval wrapperClass='item-list-loader' /> :
      <div className='item-list-head'> 
        <Card style={{ backgroundColor: 'black',  margin: '150px'}}>
          <Card.Img style={{ width: '350px', height: '120px'}} variant="top" src={productos.img} />
          <Card />
          <Card.Body style={{ backgroundColor: 'white'}}>
            <Card.Text className="text-center" style={{ fontSize: 'large', width: '350px', height: '50px'}}>
              {productos.descripcion}
            </Card.Text>
            <Card.Title>
                {productos.precio}$
            </Card.Title>{
              cantidad === productos.stock ? <NoStock></NoStock>: <ItemCount id={productos.id} nombre={productos.nombre} img={productos.img} precio={productos.precio} initialValue={1} stock={productos.stock}></ItemCount>
            }
            {cantidad >= 1 ? <ItemListRedirect /> : null}
          </Card.Body>
        </Card>
      </div> 
      }  
    </>
      );
}

export default ItemListDetails