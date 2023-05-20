import { addDoc, collection, getFirestore } from 'firebase/firestore'
import React, { useState } from 'react'

const FormAgregarProducto = () => {
    const [dataForm, setDataForm] = useState({
        categoria: '',
        descripcion: '',
        foto: '',
        nombre: '',
        precio: '',
        stock: '',
    })
    const handleOnChange = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })}

    const FormAgregarProducto = (e) => {
        e.preventDefault()
        const producto = {
            descripcion: dataForm.descripcion,
            categoria: dataForm.categoria,
            foto: dataForm.foto,
            nombre: dataForm.nombre,
            precio: Number(dataForm.precio),
            stock: Number(dataForm.stock),
            
        }
        const dbFirestore = getFirestore()
        const ordersCollection = collection(dbFirestore, 'Productos')
        addDoc(ordersCollection, producto)
        .then((docRef) => {
            console.log(docRef.id);
            })
        .catch( err => console.log(err))
    }





  return (
    <div className='container max-container'>
    <form onSubmit={FormAgregarProducto} className=''>
        <h1 className='text-center fs-3 fw-bolder'>Agrega un producto!</h1>
        <div className="mb-3">
            <label  className="form-label">categoria</label>
        <div className="input-group mb-3">
            <select type="text" name='categoria' value={dataForm.categoria} onChange={handleOnChange}required className="form-select form-control" id="inputGroupSelect01">
                <option selected>Categoria</option>
                <option value="pantalones">pantalones</option>
                <option value="remeras">remeras</option>
                <option value="accesorios">accesorios</option>
            </select>
        </div>
        </div>
        <div className="mb-3">
            <label  className="form-label">descripcion</label>
            <input type="text" name='descripcion' value={dataForm.descripcion} className="form-control" onChange={handleOnChange}required></input>
        </div>
        <div className="mb-3">
            <label  className="form-label">foto</label>
            <input type="url" name='foto' value={dataForm.foto} className="form-control" onChange={handleOnChange} required></input>
        </div>
        <div className="mb-3">
            <label  className="form-label">nombre</label>
            <input type="text" name='nombre' value={dataForm.nombre} className="form-control" onChange={handleOnChange}required></input>
        </div>
        <div className="mb-3">
            <label  className="form-label">precio</label>
            <input type="number" name='precio' value={dataForm.precio} className="form-control" onChange={handleOnChange}required></input>
        </div>
        <div className="mb-3">
            <label  className="form-label">stock</label>
            <input type="number" name='stock' value={dataForm.stock} className="form-control" onChange={handleOnChange} required></input>
        </div>
        
        <button  type="submit" className="mostrar-botones">Agregar producto!</button>
    </form>
    
</div>
  )
}

export default FormAgregarProducto