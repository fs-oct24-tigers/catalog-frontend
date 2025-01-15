import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: number = 16;

export const perPageSlice = createSlice({
  name: 'perPage',
  initialState,
  reducers: {
    changePerPage: (state, action: PayloadAction<number>) => {
      return action.payload;
    },
  },
});

export const { changePerPage } = perPageSlice.actions;
export default perPageSlice.reducer;
