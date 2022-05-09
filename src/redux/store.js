import { configureStore } from '@reduxjs/toolkit';
import launcheReducer from '../redux/slice/rocketLaunche';

const store = configureStore({
  reducer: {
    launche: launcheReducer,
  },
});
export default store;
