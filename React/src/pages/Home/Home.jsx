import React from 'react'
import { HomeContainerStyled } from './HomeStyles'
import Hero from '../../components/Hero/Hero'
import Recommended from '../../components/Recommended/Recommended'

const Home = () => {
  return (
    <HomeContainerStyled>
        <Hero/>
        <Recommended/>
    </HomeContainerStyled>
  )
}

export default Home