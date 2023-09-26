import React, { useEffect, useState } from 'react';
import { CardsContainerStyled, CategoriesContainerStyled, ProductsContainerStyled } from './ProductsStyles';
import Boton from '../../components/UI/Boton/Boton';
import { Card } from '../Products/ProductsStyles';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategory } from '../../redux/categories/CategoriesSlice';

const Products = () => {
  const { categories } = useSelector((state) => state.categories);
  const allProducts = useSelector((state) => state.products.products);
  const { selectedCategory } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  
  const filteredProducts = allProducts.filter((product) => {
    return selectedCategory ? product.category === selectedCategory : true;
  });

  return (
    <>
      <ProductsContainerStyled>
        <h2>Nuestros productos</h2>
        <h3>Categorias</h3>
        <CategoriesContainerStyled>
          {categories.map((category) => {
            return (
              <Boton
                key={category.id}
                selected={category === selectedCategory}
                onClick={() => dispatch(selectCategory(category))} 
              >
                {category.tittle}
              </Boton>
            );
          })}
        </CategoriesContainerStyled>
        <CardsContainerStyled>
          {filteredProducts.map((product) => {
            const { id, name, price, src } = product;
            return (
              <Card key={id}>
                <img src={src} alt={name} />
                <h3>{name}</h3>
                <span>{price}</span>
                <Boton>Comprar</Boton>
              </Card>
            );
          })}
        </CardsContainerStyled>
      </ProductsContainerStyled>
    </>
  );
};

export default Products;