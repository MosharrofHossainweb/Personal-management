import { configureStore } from '@reduxjs/toolkit'
import UserSlice from './UserSlice'

const store = configureStore({
  reducer: {
    currentUser: UserSlice,
  },
})

export default store // Default export
