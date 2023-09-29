import { useSelector } from 'react-redux';
import CardProducto from './CardProducto';
import { ProductosContainer } from './CardProductosStyles';

const CardProductos = () => {
  const products = useSelector((state) => state.products.products);
  const { selectedCategory } = useSelector((state) => state.categories);
  
  

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  

  return (
    <ProductosContainer>
      {filteredProducts.map((product) => (
        <CardProducto key={product.id} product={product} />
      ))}
    </ProductosContainer>
  );
};

export default CardProductos;