import { configureStore } from '@reduxjs/toolkit';
import launcheReducer from './slice/lanches';

const store = configureStore({
  reducer: {
    launches: launcheReducer,
  },
});
export default store;
