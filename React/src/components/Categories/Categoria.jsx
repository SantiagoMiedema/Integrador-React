import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { selectCategory } from "../../redux/categories/categoriesSlice";
import { BotonCategoria } from './CategoriasStyles';

const Categoria = ({tittle, category}) => {

    const {selectedCategory} = useSelector((state) => state.categories)

    const dispatch = useDispatch();

  return (
    <BotonCategoria
    selected={category === selectedCategory}
    onClick={() => dispatch(selectCategory(category))}

    >{tittle}</BotonCategoria>
  )
}

export default Categoria;