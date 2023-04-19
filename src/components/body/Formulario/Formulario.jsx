import React, { useState } from 'react'
import Form from './Form'

function Formulario() {
    const [formData, setFormData] = useState({email: '', text: ''})


    const hamdleOnChange = (e) => {
        console.log('name:', e.target.name)
        console.log('value:', e.target.value)
        setFormData({...formData, [e.target.name]: e.target.value})

    }

  return (
  <Form formData={formData} hamdleOnChange={hamdleOnChange}/>
)

}

export default Formulario