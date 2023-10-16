import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    user: {
        name: "",
        email: "",
        image: "",
    },
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state,action  ) => {
            state.user = action.payload
        },
        logout: (state) => {
            state.user = initialState.user
        }
    },
})

export const {login, logout} = userSlice.actions

export const isLoggedIn = (state) => state.user.user.name !== ""

export default userSlice.reducer;