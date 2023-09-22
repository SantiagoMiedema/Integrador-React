import { createSlice } from "@reduxjs/toolkit";
import { categories } from "../../data/Categories";

const INITIAL_STATE = {
    categories: categories,
    selectedCategory: null
}

export const categoriesSlice = createSlice({
    name: "categories",
    initialState: INITIAL_STATE,
    reducers: {
        selectCategory : (state, action) => {
            return {
                ...state,
                selectedCategory: action.payload !== state.selectedCategory ?
                action.payload: null
            }
        },
        categorie: (state) => {
            return state
        }
    }
})

export const {
    selectCategory,
    categorie
} = categoriesSlice.actions;

export default categoriesSlice.reducer