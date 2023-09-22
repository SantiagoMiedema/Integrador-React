import React from 'react'
import { AboutUsMainContainer, AboutUsContainer, AboutUsTextContainer, AboutUsImgContainer } from './AboutUsStyles'

const AboutUs = () => {
  return (
    <AboutUsMainContainer>

      <AboutUsContainer>
        <AboutUsTextContainer>
        <h2>Nuestra historia</h2>
        <p>
          <span>Alaska</span> nació en 2015, en un pequeño local de Once, barrio de la ciudad de Buenos Aires,
          comenzó como un pequeño negocio con grandes sueños. 
        </p>
        <p>
            Tras superar los primeros desafíos de apertura y la dificultad económica del país se pudo sostener estable
             hasta en los momentos más difíciles . Fue en la pandemia cuando se decidió que la única opción de seguir 
             adelante seria implementar un E-commerce para acceder nuevamente a las ventas. 
        </p>
        <p>
          Fue así que  <span>Alaska</span> se convirtio en uno de los más conocidos mayoristas del mercado argentino,
          llevando moda, calidad y precio a todos los puntos del pais
        </p>
        </AboutUsTextContainer>
        <AboutUsImgContainer>
          <img src='./img/aboutusimg.jpg'></img>
        </AboutUsImgContainer>
      </AboutUsContainer>

      <AboutUsContainer>
        <AboutUsImgContainer>
          <img src='./img/aboutusimg2.jpg'></img>
        </AboutUsImgContainer>
        <AboutUsTextContainer>
          <h2>Nuestros Objetivos</h2>
          <p>
            Nuestro próximo paso es emprender una cadena de comercios con nuestra marca y no solo llegar a todo el país 
            por medio de envíos , sino que en todas las provincias haya un local con nuestro nombre, para simplificar su 
            compra y poder vestir nuestros productos al instante.
          </p>
        </AboutUsTextContainer>

      </AboutUsContainer>
    </AboutUsMainContainer>
  )
}

export default AboutUs