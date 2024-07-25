import './ItemListContainer.css'
import ItemList from './ItemList'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Oval } from "react-loader-spinner";
import { db } from '../../config/firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'

const ItemListContainer = ({label}) => {

    const [ productos, setProductos] = useState([])
    const [ loading, setLoading ] = useState(true)
    const { categoryID } = useParams()
    const navigate = useNavigate()
    const categorias = ['World of Warcraft', 'Runescape', 'Albion']

    
    useEffect(() => {
        setLoading(true)
            const getData = async () => {
                const coleccion = collection(db, 'productos')
                const queryRef = !categoryID ? coleccion : categorias.find(element => element === categoryID) ? query(coleccion, where('categoria', '==', categoryID)) : navigate('/notfound', {replace: true})

                const response = await getDocs(queryRef)
                const products = response.docs.map((doc) => {
                    const newItem = {
                        ...doc.data(),
                        id: doc.id
                    }  
                   
                    return newItem      
                } 
            )

            setProductos(products)
            setLoading(false)
          }
            
            getData()
                    
            }, [categoryID, navigate] )
    

             
    return(
        <>{
        loading ? <Oval wrapperClass='item-list-loader'/> :
        <div className='item-list-head'>
            <h1 className='itemlist'>{label}</h1>
            <h1 className='itemlist'>
                Your #1 Source for MMO <br /> Services and Boosting
            </h1>
            <ItemList productos= {productos}/>

        </div>
        }
        </>
    )

    
}

export default ItemListContainer
