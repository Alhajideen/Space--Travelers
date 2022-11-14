import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './Mission/missionSlice';
import rocketReducer from './Rockets/rocketSlice';

export default configureStore({
  reducer: {
    rockets: rocketReducer,
    mission: missionReducer,
  },
});
