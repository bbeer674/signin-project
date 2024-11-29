import {configureStore} from '@reduxjs/toolkit';
import localeDataSlice from './slices/localeSlice';

export const store = configureStore({
  reducer: {
    locale: localeDataSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
