import {configureStore} from "@reduxjs/toolkit";
import basketReducer from "@/services/redux/features/basketSlice";

// The global Store
export const store = configureStore(
    {
        reducer: {
            basket: basketReducer,
        },
    }
)
