import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getMissions = createAsyncThunk('getMission', async () => {
  const missions = await axios('https://api.spacexdata.com/v3/missions');
  // console.log(missions);
  return missions.data;
});

const initialState = { loading: false, data: [], error: null };

export const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    // Do stuff here
    joinMission(state, action) {
      const newMissions = [];
      console.log(state.data);
      state.data.map((mission) => {
        if (mission.id === action.payload) {
          newMissions.push({ ...mission, member: !mission.member });
          console.log(mission);
        } else {
          newMissions.push(mission);
        }
        return newMissions;
      });
      // console.log(newMissions);
    },
  },

  extraReducers: (Builder) => {
    Builder.addCase(getMissions.pending, (state) => {
      const newState = { ...state, loading: true };
      return newState;
    })
      .addCase(getMissions.fulfilled, (state, action) => {
        const missions = action.payload;
        const arr = [];
        missions.forEach((info) => {
          const myObj = { ...info, member: false };
          arr.push(myObj);
        });
        const newState = { ...state, data: arr, loading: false };
        console.log(state.data);
        return newState;
      })
      .addCase(getMissions.rejected, (state) => {
        const newState = { ...state, error: 'Error 404. Failed to fetch' };
        return newState;
      });
  },
});

export const { joinMission } = missionSlice.actions;

export default missionSlice.reducer;
