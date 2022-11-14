import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import missionReducer from './Mission/missionSlice';
import rocketReducer from './Rockets/rocketSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    rockets: rocketReducer,
    mission: missionReducer,
  },
});
