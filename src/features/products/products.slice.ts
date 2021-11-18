import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from './products.interface';
import { products as data } from './mocks.product';

interface IProducts {
  data: Array<IProduct>
}

const initialState: IProducts = {
  data
};


const productsSlide = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<string>) {
      state.data.forEach((product: IProduct) => {
        product.name === action.payload ? product.quantity++ : null;
      })
    },
    addToFav(state, action: PayloadAction<IProduct>) {
      state.data.forEach((product:IProduct) => {
        product.favourite = product.name === action.payload.name; 
      })
    }
  }
});

export const { addToCart, addToFav } = productsSlide.actions;
export default productsSlide.reducer;