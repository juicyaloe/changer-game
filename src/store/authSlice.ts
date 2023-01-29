import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Action이 있으면 PayloadAction<any> 타입 주기

interface AuthState {
  id?: number;
  userid?: string;
  name?: string;
  address?: string;
  phone?: string;
  phoneCheck?: boolean;
  email?: string;
  emailCheck?: boolean;
  birth?: string;
  level?: string;
  token?: string;
}

const initialState = { token: undefined } as AuthState;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth(
      state,
      action: PayloadAction<{
        id: number;
        userid: string;
        name: string;
        address: string;
        phone: string;
        phoneCheck: boolean;
        email: string;
        emailCheck: boolean;
        birth: string;
        level: string;
        token: string;
      }>
    ) {
      state.id = action.payload.id;
      state.userid = action.payload.userid;
      state.name = action.payload.name;
      state.address = action.payload.address;
      state.phone = action.payload.phone;
      state.phoneCheck = action.payload.phoneCheck;
      state.email = action.payload.email;
      state.emailCheck = action.payload.emailCheck;
      state.birth = action.payload.birth;
      state.level = action.payload.level;
      state.token = action.payload.token;
    },
    clear(state) {
      state.id = undefined;
      state.userid = undefined;
      state.name = undefined;
      state.address = undefined;
      state.phone = undefined;
      state.phoneCheck = undefined;
      state.email = undefined;
      state.emailCheck = undefined;
      state.birth = undefined;
      state.level = undefined;
      state.token = undefined;
    },
  },
});

export const { setAuth, clear } = authSlice.actions;
export default authSlice.reducer;
