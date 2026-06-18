import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './cartSlice.jsx'
// here  cartReducer is used because import cartSlice.reducer is invalid syntax in js
const appStore = configureStore({
    reducer : {
        cart:cartReducer
    }
})

export default appStore;