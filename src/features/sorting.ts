import { SortType } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: SortType = 'newest' as SortType;

export const sortingSlice = createSlice({
  name: 'sorting',
  initialState,
  reducers: {
    changeSorting: (_, action: PayloadAction<SortType>) => {
      return action.payload;
    },
  },
});

export const { changeSorting } = sortingSlice.actions;
export default sortingSlice.reducer;
