import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './Login/loginSlice'
import aboutReducer from './Information/aboutReducer'

export const store = configureStore({
    reducer: {
        loginReducer: userSlice,
        about: aboutReducer,
    },
})