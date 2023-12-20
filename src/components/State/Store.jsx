import { configureStore } from "@reduxjs/toolkit";
import CheckOutReducer from "./Slice/CheckOutSlice";
import CardReducer from "./Slice/CardSlice";

export const store = configureStore({
    reducer: {
        checkout: CheckOutReducer,
        card: CardReducer
    }
})