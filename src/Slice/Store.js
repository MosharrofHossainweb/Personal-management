import { configureStore } from '@reduxjs/toolkit'
import UserSlice from './UserSlice'
import ChatUserSlice  from './ChatUserSlice'

const store = configureStore({
  reducer: {
    currentUser: UserSlice,
    chatuser:ChatUserSlice,
  },
})

export default store // Default export
