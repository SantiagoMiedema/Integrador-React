import {createSlice} from "@reduxjs/toolkit";
import { TotalProducts, productList } from "../../data/productList";

const INITIAL_STATE = {
    products: productList,
    totalProducts: TotalProducts
}

export const productsSlice = createSlice ({
    name:"products",
    initialState: INITIAL_STATE,
    reducers:{
        getProducts: state =>{
            return state;
        }
    }
})

export const {getProducts} = productsSlice.actions;

export default productsSlice.reducer