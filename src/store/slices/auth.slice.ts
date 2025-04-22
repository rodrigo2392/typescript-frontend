import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

export interface AuthState {
  token: string | null;
}

const initialState: AuthState = {
  token: null,
};

export const counterSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<AuthState>) => {
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.token = null;
    },
  },
});

export const { login, logout } = counterSlice.actions;

export const selectToken = (state: RootState) => state.authState.token;

export default counterSlice.reducer;
