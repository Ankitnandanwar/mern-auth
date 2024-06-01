import {createSlice} from '@reduxjs/toolkit'
import { updateCurrentUser } from 'firebase/auth';

const initialState = {
    currentUser: null,
    loading: false,
    error: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true;
        },

        signInSuccess: (state, action) => {
            state.loading = false;
            state.currentUser = action.payload;
            state.error = false 
        },

        signInFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload; 
        },

        updateUserStart: (state) => {
            state.loading = true;
        },

        updateUserSuccess: (state, action) => {
            state.loading = false;
            state.currentUser = action.payload;
            state.error = false
        },

        updateUserFaliure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
})

export const {signInStart, signInSuccess, signInFailure, updateUserStart, updateUserSuccess, updateUserFaliure} = userSlice.actions
export default userSlice.reducer;