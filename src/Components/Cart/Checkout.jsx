import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CartContext } from '../CartWidget/CartWidgetContext';
import { Input } from 'reactstrap';
import { db } from '../../config/firebase';
import { addDoc, collection, Timestamp } from 'firebase/firestore'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


const Checkout = () => {
  const [ cart, setCart, totalPrice ] = useContext(CartContext)
  const navigate = useNavigate()

  const [ user, setUser ] = useState({
    name: '',
    email: '',
    repeatedEmail: '',
    phone: ''
})

const clearCart = () => {
  setCart([])
}

const [ error, setError ] = useState({})

const updateUser = (event) => {
  setUser((user) => ({
      ...user,
      [event.target.name]: event.target.value
  }))
}

const validateForm = () => {
  const errors = {}
  if(!user.name) {
      errors.name  = 'Tenés que agregar un nombre'
  }else if(user.name.length < 3 || user.name.length > 15) {
      errors.name = "El nombre debe tener al menos 3 caracteres y un máximo de 15"
  }
  if(!user.email){
      errors.email = 'Tenés que ingresar un email'
  }else if(!/\S+@\S+\.\S+/.test(user.email)){
      errors.email = 'Tenés que ingresar un email válido'
  }
  if(!user.repeatedEmail) {
      errors.repeatedEmail  = 'Tenés que volver a ingresar el email'
  }else if(user.email !== user.repeatedEmail) {
      errors.repeatedEmail = "Los emails no coinciden"
  }
  if(!user.phone){
      errors.phone = 'Tenés que agregar un teléfono'
  }else if(user.phone.length < 8){
      errors.phone = 'Tenés que ingresar un teléfono válido'
  }
  setError(errors)
  console.log(errors)
  return Object.keys(errors).length === 0
}
const getOrder = async () => {
  if(!validateForm()){
      return
  }
  if(cart.length === 0) {
    Swal.fire({
        position: "center",
        icon: "error",
        title: `El Carrito esta vacio`,
        showConfirmButton: false,
        timer: 1500
      })
      return
  }

  const ordersCollection = collection(db, 'orders')
  console.log(ordersCollection)

  try {
      const order = {
          buyer: user,
          cart: cart,
          total: totalPrice,
          fechaDeCompra: Timestamp.now()
      }
      const orderRef = await addDoc(ordersCollection, order)
      console.log(orderRef)
      Swal.fire({
        position: "center",
        icon: "success",
        title: `El número de orden es: ${orderRef.id}`,
        showConfirmButton: false,
        timer: 3500
      });
      navigate('/', {replace: true})
      clearCart()
  } catch (error) {
      console.log(error)
  }
}


  return (
    <Form border="primary" style={{display: 'flex', flexDirection: 'column', marginLeft: '40%', marginTop: '5%', backgroundColor: '#f1d566', width: '20%', borderRadius: '5px' }}>
    <Form.Group className="mb-3" >
        <Form.Label>Nombre</Form.Label>
        <Input  type='text' 
                    name='name' 
                    placeholder='Nombre' 
                    sx={{
                        '::placeholder': {
                            color: '#3F747D',
                        },
                    }}
                    onChange={updateUser} />
        
        
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Input 
                    type='email'
                    name='email' 
                    placeholder='Email' 
                    sx={{
                        '::placeholder': {
                            color: '#3F747D',
                        },
                    }}
                    onChange={updateUser}/>
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Repeat Email address</Form.Label>
        <Input 
                    type='email'
                    name='repeatedEmail' 
                    placeholder='Repetir email'
                    sx={{
                        '::placeholder': {
                            color: '#3F747D',
                        },
                    }} onChange={updateUser}/>
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label >Numero de Telefono</Form.Label>
        <Input 
                    type='text' 
                    name='phone' 
                    placeholder='Teléfono' 
                    sx={{
                        '::placeholder': {
                            color: '#3F747D',
                        },
                    }}
                    onChange={updateUser}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
       </Form.Group>
      <Button style={{width: '50%', marginLeft: '25%', marginBottom: '10%'}} variant="primary" onClick={getOrder} >
        Finalizar Compra
      </Button>
    </Form>
  )
}

export default Checkout

