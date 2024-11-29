import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';

export interface localData {
  locale: string;
}

interface DataState {
  locale: localData | null;
  loading: boolean;
  error: string | null;
}

const initialState: DataState = {
  locale: null,
  loading: false,
  error: null,
};

const localeDataSlice = createSlice({
  name: 'locale',
  initialState,
  reducers: {
    setLoadingLocale(state, action) {
      state.loading = action.payload;
    },
    setDataLocale(state, action) {
      state.locale = action.payload;
    },
    setErrorLocale(state, action) {
      state.error = action.payload;
    },
    clearDataLocale(state) {
      state.locale = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  setLoadingLocale,
  setDataLocale,
  setErrorLocale,
  clearDataLocale,
} = localeDataSlice.actions;

export const selectDataLocale = (state: RootState) => state.locale.locale;
export const selectLoadingLocale = (state: RootState) => state.locale.loading;
export const selectErrorLocale = (state: RootState) => state.locale.error;

export default localeDataSlice.reducer;
