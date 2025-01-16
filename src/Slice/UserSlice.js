import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: JSON.parse(localStorage.getItem('user'))?JSON.parse(localStorage.getItem('user')):null,
}

export const UserSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    userData: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {  userData } = UserSlice.actions

export default UserSlice.reducer