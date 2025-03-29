import { configureStore } from "@reduxjs/toolkit"
import adminReducer from './slices/adminSlice'
import userReducer from './slices/userSlice'

const appStore = configureStore({
    reducer : {
        admin: adminReducer,
        user:userReducer
    }
})

export default appStore