import { configureStore } from '@reduxjs/toolkit'
import UserSlice from './UserSlice'
import ChatUserSlice  from './ChatUserSlice'
import { ProductData } from './ProducSlice'

const store = configureStore({
  reducer: {
    currentUser: UserSlice,
    chatuser:ChatUserSlice,
    productuser:ProductData,
  },
})

export default store // Default export
