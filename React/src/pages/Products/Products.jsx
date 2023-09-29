import Categorias from "../../components/Categories/Categorias";
import CardsProductos from "../../components/Products/CardProductos";
import { CardsContainerStyled, ProductsContainerStyled } from "./ProductsStyles";

const Products = () => {
  return (
    <>
      <ProductsContainerStyled>
        <h1>Nuestros productos</h1>
        <h2>Categorias</h2>
        <Categorias />
        <CardsContainerStyled>
          <CardsProductos />
        </CardsContainerStyled>
      </ProductsContainerStyled>
    </>
  );
};

export default Products;