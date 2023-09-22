import React from 'react'
import { HeroContainerStyled, HeroImgContainer, HeroTextContainer} from './HeroStyles'

const Hero = () => {
  return (
    <HeroContainerStyled>
      <HeroTextContainer>
        <h1>La moda va con vos</h1>
        <h2>¡Llevala con <span>Alaska</span>!</h2>
        <p>
          Equipate siempre con la mejor calidad , precio y atencion al cliente de todo el mercado
        </p>
      </HeroTextContainer>
      <HeroImgContainer>
        <img src='./img/background-hero.jpg'></img>
      </HeroImgContainer>
    </HeroContainerStyled>
  )
}

export default Hero