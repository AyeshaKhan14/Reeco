import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import ProductReducer from "./slices/product.slice";

const store = configureStore({
  reducer: {
    product: ProductReducer,
  },
});

const StoreProvider = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

export default StoreProvider;