import './ItemListContainer.css'
import ItemList from './ItemList'
import { getProduct, getProductsByCategory } from "../../data/asyncMock"
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Oval } from "react-loader-spinner";

const ItemListContainer = ({label}) => {

    const [ productos, setProductos] = useState([])
    const [ loading, setLoading ] = useState(true)
    const { categoryID } = useParams()
    const navigate = useNavigate()
    const categorias = ['Remeras', 'Buzos', 'Pijamas', 'Zapatillas']

    useEffect(() => {
        setLoading(true)
        if (categoryID) {
            if(categorias.find(element => element === categoryID)) {
                const dataProductos = getProductsByCategory(categoryID)
                dataProductos
                    .then((prod) => setProductos(prod))
                    .catch((error) =>console.error())
                    .finally(() => setLoading(false))}
                    
            else {
                navigate('/notfound', {replace: true})}}
        else {
            const dataProductos = getProduct()
            dataProductos
                    .then((prod) => setProductos(prod))
                    .catch((error) =>console.error())
                    .finally(() => setLoading(false))}
                    
            }, [categoryID, navigate] )

             
    return(
        <>{
        loading ? <Oval wrapperClass='item-list-loader'/> :
        <div className='item-list-head'>
            <h1 className='itemlist'>
                {label}
            </h1>
            <ItemList productos= {productos}/>

        </div>
        }
        </>
    )

    
}

export default ItemListContainer
