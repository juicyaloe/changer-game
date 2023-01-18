import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Action이 있으면 PayloadAction<any> 타입 주기

interface PopupState {
  isActive: boolean;
}

const initialState = { isActive: false } as PopupState;

const popupSlice = createSlice({
  name: 'popup',
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

export const { open, close } = popupSlice.actions;
export default popupSlice.reducer;
