import React, { useState } from 'react'
import jwt_decode from 'jwt-decode'
import loginCSS from './GestorEmpleados-page.module.css'
import { useHistory } from 'react-router-dom'

export const NuevoEmpleado = () => {

  const [nombre, setNombre] = useState('')
  const [descripcion, setDescripcion] = useState('')

  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const registrarNuevoEmpleado = async () => {
    const url = `http://127.0.0.1:4000/api/empleados/nuevo-empleado`
    const tmp = {
      id: new Date().getTime(),
      name: nombre,
      description: descripcion
    }
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(tmp)
    }).then(res => res.json())
      .then(res => {
        console.log(res)
      })
      .catch(e => console.log(e))
    history.push('/Empleados')
  }

  return (
    <div className={loginCSS.login__container}>
      <div className={loginCSS.login}>
        <i className="fas fa-user-circle"></i>
        <form onSubmit={handleSubmit}>
          <div className={loginCSS.input__block}>
            <label>Nombre del nuevo empleado:</label>
            <input type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>
          <div className={loginCSS.input__block}>
            <label>Descripción:</label>
            <input type="text"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              required
            />
          </div>
          <button onClick={registrarNuevoEmpleado} >Registrar al nuevo empleado</button>
        </form>
      </div>
    </div>
  )
}
