import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    loading: false,
    error: false
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signinStart: (state) => {
            state.loading = true;
        },
        signinSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = false;
        },
        signinFailed: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
})
export const { signinStart, signinSuccess, signinFailed } = userSlice.actions;
export default userSlice.reducer;