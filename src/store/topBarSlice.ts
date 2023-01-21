import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Action이 있으면 PayloadAction<any> 타입 주기

interface TopBarState {
  isActive: boolean;
}

const initialState = { isActive: false } as TopBarState;

const topBarSlice = createSlice({
  name: "topBar",
  initialState,
  reducers: {
    open(state) {
      state.isActive = true;
    },
    close(state) {
      state.isActive = false;
    },
  },
});

export const { open, close } = topBarSlice.actions;
export default topBarSlice.reducer;
