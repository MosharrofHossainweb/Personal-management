import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value:JSON.parse(localStorage.getItem('productuser'))?JSON.parse(localStorage.getItem('productuser')):  null,
}

export const ChatUserSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {
    ProductData: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { ProductData } = ChatUserSlice.actions

export default ChatUserSlice.reducer