import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Action이 있으면 PayloadAction<any> 타입 주기

interface PopupState {
  isActive: boolean;
  title: string;
  content: string;
  navigateUrl?: string;
}

const initialState = {
  isActive: false,
  title: '알림',
  content: `일시적인 오류가 발생했습니다.\n잠시 후에 시도해주세요.`,
  navigateUrl: undefined,
} as PopupState;

const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    open(
      state,
      action: PayloadAction<{
        title?: string;
        content?: string;
        navigateUrl?: string;
      }>
    ) {
      state.isActive = true;
      state.title = action.payload.title ?? '알림';
      state.content =
        action.payload.content ??
        `일시적인 오류가 발생했습니다.\n잠시 후에 시도해주세요.`;
      state.navigateUrl = action.payload.navigateUrl;
    },
    close(state) {
      state.isActive = false;
    },
  },
});

export const { open, close } = popupSlice.actions;
export default popupSlice.reducer;
