import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './Login/loginSlice'

export const store = configureStore({
    reducer: {
        loginReducer: userSlice
    },
})