import { useDispatch } from "react-redux";
import Boton from "../UI/Boton/Boton";
import { ProductosCard } from "./CardProductosStyles";
import { addToCart } from "../../redux/cart/cartSlice";

const CardProducto = ({ product }) => {
  const { id, name, price, src } = product; 
  const dispatch = useDispatch();

  return (
    <ProductosCard>

      <img src={src} alt={name} />
      <h3>{name}</h3>
      <span>{price}</span>
      <Boton onClick={() => dispatch(addToCart( id, name, price, src ))}>Agregar</Boton>

    </ProductosCard>
  );
}



export default CardProducto;