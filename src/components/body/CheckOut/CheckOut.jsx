import React, { useState } from 'react'
import {addDoc, collection, getFirestore} from 'firebase/firestore'
import { useCartContext } from '../../../Context/CartContext'
import './ChekOut.scss'
import CardCheckOut from '../Cards/CardCheckOut'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const CheckOut = () => {
    const [orden, setOrden] = useState(false)
    const [idOrden, setIdOrden] = useState('')
    const [dataForm, setDataForm] = useState({
        name: '',
        phone: '',
        email: '',
        repetirEmail: ''
    })
    const {getTotal, cart, emptyCart} = useCartContext()
    const generarOrden = (e) => {
        e.preventDefault()
        const orden = {}
            orden.buyer = dataForm,
            orden.items = cart.map(({id, nombre, precio, cantidad}) => ({id, nombre, precio, cantidad})),
            orden.total = getTotal()
            orden.date = new Date()
        const dbFirestore = getFirestore()
        const ordersCollection = collection(dbFirestore, 'orders')
        if(dataForm.email !== dataForm.repetirEmail){
            Swal.fire({
                title: 'Error!',
                text: 'LOS EMAILS NO COINCIDEN',
                icon: 'error',
                showConfirmButton: false,
                timer: 2000,
                color: '#333333',
                background: '#fff',
                padding: '1rem',
              })
            return
        }else{
            addDoc(ordersCollection, orden)
            .then((docRef) => {
                setIdOrden(docRef.id);
                setOrden(true);

              })
            .catch( err => console.log(err))
            .finally(() => {
                setTimeout(() => {
                    emptyCart()
                }, 5000);
            })

        }
        
    }
    const handleOnChange = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
        
    }
  return (
    <div className='container '>
        <div className=' row container'>
            <div className='col-12 col-lg-7  max-container m-3'>
                {
                    cart.length === 0 ?
                        <h1 className='text-center fs-5 py-4'>No hay productos en el carrito</h1>
                    :
                        <>
                            {
                                !orden ?
                                <div>
                                    <form onSubmit={generarOrden} className=''>
                                        <h1 className='text-center fs-3 fw-bolder'>CHECK OUT</h1>
                                        <div className="mb-3">
                                            <label  className="form-label">Nombre</label>
                                            <input type="text" name='name' value={dataForm.name} className="form-control" onChange={handleOnChange}required></input>
                                        </div>
                                        <div className="mb-3">
                                            <label  className="form-label">Telefono</label>
                                            <input type="number" name='phone' value={dataForm.phone} className="form-control" onChange={handleOnChange}required></input>
                                        </div>
                                        <div className="mb-3">
                                            <label  className="form-label">Email</label>
                                            <input type="email" name='email' value={dataForm.email} className="form-control" onChange={handleOnChange} required></input>
                                        </div>
                                        <div className="mb-3">
                                            <label  className="form-label">Repetir Email</label>
                                            <input type="email" name='repetirEmail' value={dataForm.repetirEmail} className="form-control" onChange={handleOnChange} required></input>
                                        </div>
                                        
                                        <button  type="submit" className="mostrar-botones">Crear Orden</button>
                                    </form>
                                    
                                </div>
                            :
                            <div className='d-flex flex-column justify-content-center align-content-center py-2'>
                                <h1 className='fs-4 text-center'>¡TU ORDEN YA ESTA LISTA!</h1>
                                <h4 className='fs-5 pt-5 text-center'>Hola {dataForm.name.toLowerCase()}</h4>
                                <h4 className='fs-5 py-2 text-center'>Su numero de orden es: {idOrden} </h4>
                                <Link className='text-center fw-bold ' to={"/"}>SEGUIR COMPRANDO</Link>
                            </div>
                            }
                        </>
                }
            </div>
            <div className='col-12 col-lg-4 max-container m-3'>
                <CardCheckOut/>
            </div>
        </div>

    </div>
  )
}

export default CheckOut