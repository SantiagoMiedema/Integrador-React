import { productList} from "../data/ProductList";

export const pickRandomProducts = (cantidad) => {
    const nuevoArray = [];
  
    while (nuevoArray.length < cantidad) {
      const indexRandom = Math.floor(Math.random() * productList.length);
  
      if (!nuevoArray.length) {
        nuevoArray.push(productList[indexRandom]);
      }
  
      const productoExistente = nuevoArray.find((newProduct) => {
        return newProduct.id === productList[indexRandom].id;
      });
  
      if (!productoExistente) {
        nuevoArray.push(productList[indexRandom]);
      }
      
    }
  
    return nuevoArray;
  };