import { getCarts, updateCart } from "@/api/carts";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: {
    data: null,
    isLoading: false,
  },
  updateCart: {
    isLoading: false,
  },
};

export const fetchCarts = createAsyncThunk("carts/getCarts", async () => {
  const response = await getCarts();
  return response;
});

export const addToCarts = createAsyncThunk(
  "carts/addToCarts",
  async ({ productCode, quantity }) => {
    const response = await updateCart({ productCode, quantity });
    return response;
  }
);

export const cartSlice = createSlice({
  name: "carts",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchCarts.pending, (state) => {
        state.cartList.isLoading = true;
      })
      .addCase(fetchCarts.fulfilled, (state, action) => {
        state.cartList.isLoading = false;
        state.cartList.data = action.payload;
        console.log(action.payload);
      })
      .addCase(fetchCarts.rejected, (state, action) => {
        state.cartList.isLoading = false;
      })
      .addCase(addToCarts.pending, (state, action) => {
        state.updateCart.isLoading = true;
      })
      .addCase(addToCarts.fulfilled, (state, action) => {
        const { productCode, quantity } = action.payload;
        const itemToUpdate = state.cartList.data.find(
          (item) => item.productCode === productCode
        );
        if (itemToUpdate) {
          itemToUpdate.quantity = quantity;
        } else {
          state.cartList.data.push({ productCode, quantity });
        }
        state.updateCart.isLoading = false;
      });
  },
});

export const selectCarts = (state) => state.carts.cartList;

export default cartSlice.reducer;
