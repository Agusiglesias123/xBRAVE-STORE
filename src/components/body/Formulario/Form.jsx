import React from 'react'

function Form({formData, hamdleOnChange}) {

    const handleOnsubmit = (e) => {
        e.preventDefault()
        console.log('Formulario enviado', formData)
    }

  return (
    <section>
    <form className='container' onSubmit={handleOnsubmit}>
        <div className="mb-3">
            <input type="email" className="form-control" name='email' placeholder="name@example.com" onChange={hamdleOnChange} value={formData.email}/>
        </div>
        <div className="mb-3">
            <textarea className="form-control" name='text' rows="3" placeholder='Escriba...' onChange={hamdleOnChange} value={formData.text}></textarea>
        </div>
        <div className="mb-3">
            <button className='btn btn-success'>Enviar</button>
        </div>
    </form>
</section>
  )
}

export default Form