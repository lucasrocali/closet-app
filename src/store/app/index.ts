import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./../";

type Item = {
  id: string;
};

export interface AppState {
  items: Item[];
}

const initialState: AppState = {
  items: [],
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      const item = action.payload;
      state.items = [...state.items, item];
    },
  },
});

export const { addItem } = appSlice.actions;

export const selectItems = (state: RootState) => state.app.items;

export default appSlice.reducer;
