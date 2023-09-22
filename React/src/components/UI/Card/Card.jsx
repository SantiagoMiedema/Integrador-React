import React from 'react'
import { CardH2, CardImg, CardSpan, Cardrec } from './CardStyled'
import Boton from '../Boton/Boton'


const Card = ({name , price, src}) => {
  return (
      
       <Cardrec>
        <CardImg>{src}</CardImg>
        <CardH2>{name}</CardH2>
      <CardSpan>{price}</CardSpan>
        <Boton>Comprar</Boton>

       </Cardrec>

  
  )
}

export default Card