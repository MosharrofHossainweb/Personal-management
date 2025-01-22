import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value:JSON.parse(localStorage.getItem('chatuser'))?JSON.parse(localStorage.getItem('chatuser')):  null,
}

export const ChatUserSlice = createSlice({
  name: 'chatuserSlice',
  initialState,
  reducers: {
    ChatuserData: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { ChatuserData } = ChatUserSlice.actions

export default ChatUserSlice.reducer