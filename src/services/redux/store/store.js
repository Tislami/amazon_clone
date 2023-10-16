import {configureStore} from "@reduxjs/toolkit";
import basketReducer from "@/services/redux/features/basketSlice";
import userReducer from "@/services/redux/features/userSlice";

// The global Store
export const store = configureStore(
    {
        reducer: {
            basket: basketReducer,
            user: userReducer,
        },
    }
)
