import { configureStore } from "@reduxjs/toolkit";
import users from './JobSlice';
const store = configureStore({
    reducer:{
        users
    }
})
export default store;