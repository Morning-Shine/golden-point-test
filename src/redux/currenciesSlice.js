import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currencies: [],
};

export const currenciesSlice = createSlice({
  name: "currencies",
  initialState,
  reducers: {
    currencies: (state, action) => {
      state.currencies.push(action.payload);
    },
  },
});

export const { currencies } = currenciesSlice.actions;
export default currenciesSlice.reducer;
