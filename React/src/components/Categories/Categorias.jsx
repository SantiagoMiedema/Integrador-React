import React from 'react'
import { CategoriesContainerStyled } from './CategoriasStyles'
import Categoria from "./Categoria";
import { useSelector } from 'react-redux';


const Categorias = () => {

    const {categories} = useSelector((state) => state.categories)
   
    

  return (
    <CategoriesContainerStyled>
        {
         categories.map((category) => {
            return <Categoria {...category} key={category.id} />
          })
        }
    </CategoriesContainerStyled>
  )
}

export default Categorias