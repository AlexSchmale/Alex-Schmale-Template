import React from 'react'
import './Card.css'


const Card = (props) => {

  return (
    <div className='contenedor-card'>
      <h2>Tu nombre es: <span>{props.datos.nombre}</span></h2>
      <p style={{border:'1px solid white', padding:'16px', backgroundColor:'#' + props.datos.color}}>Tu color favorito es: #{props.datos.color}</p> 
    </div>
  )
}

export default Card