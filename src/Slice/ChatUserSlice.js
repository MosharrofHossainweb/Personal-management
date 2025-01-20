import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: null,
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