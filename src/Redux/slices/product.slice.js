import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	productArr:[],
    loading: false,
};

const productSlice = createSlice({
	name: "product",
	initialState,
	reducers: {
		setProductArr: (state, action) => {
			state.productArr = action.payload;
		},
        setLoading: (state, action) => {
            state.loading = action.payload;
          },
     
	},
});

export const { setProductArr ,setLoading} = productSlice.actions;
export default productSlice.reducer;