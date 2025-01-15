import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type SortType = 'alphabetically' | 'cheapest' | 'expensive';

const initialState: SortType = 'expensive' as SortType;

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
