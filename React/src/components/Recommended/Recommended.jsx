 import React from 'react'
 import { RecommendedContainer, CardsContainerStyled, CardRecommended } from './RecommendedStyles'
  import Boton from '../UI/Boton/Boton'
  import {useSelector} from "react-redux"


 const Recommended = () => {

  const {recommended} = useSelector((state) => state.recommended);
    
   return (
     <RecommendedContainer>
         <h2>Recomendados</h2>
         <CardsContainerStyled>
          {recommended.map((recomendado) => {
            const { id, name, price, src } = recomendado;
            return (
              <CardRecommended key={id}>
                <img src={src} alt={name} />
                <h3>{name}</h3>
                <span>{price}</span>
                <Boton>Comprar</Boton>
              </CardRecommended>
            );
          })}
          </CardsContainerStyled>
          <Boton>Ver mas productos</Boton>
     </RecommendedContainer>
  )
 }

 export default Recommended