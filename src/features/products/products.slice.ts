import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from './products.interface';
import { products as data } from './mocks.product';

export interface IProducts {
  data: Array<IProduct>
}

export const initialState: IProducts = {
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
    setFavourite(state, action: PayloadAction<string>) {
      const selectedProduct = state.data.find(product => product.name === action.payload);
      selectedProduct.favourite = !selectedProduct?.favourite;
    }
  }
});

export const { addToCart, setFavourite } = productsSlide.actions;
export default productsSlide.reducer;