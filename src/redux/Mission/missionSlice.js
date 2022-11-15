import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getMissions = createAsyncThunk(
  'getMission',
  async (_, thunkAPI) => {
    if (thunkAPI.getState().missions.length !== 0) {
      return null;
    }
    const missions = await axios.get('https://api.spacexdata.com/v3/missions');
    return missions.data;
  }
);

const initialState = { loading: false, data: [], error: null };

export const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission(state, { payload }) {
      const newMissions = [];
      state.data.map((mission) => {
        if (mission.mission_id === payload) {
          newMissions.push({
            ...mission,
            member: !mission.member,
          });
        } else {
          newMissions.push(mission);
        }
        return newMissions;
      });
      return { ...state, data: newMissions };
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
        return newState;
      })
      .addCase(getMissions.rejected, (state) => {
        const newState = { ...state, error: 'Error 404. Failed to fetch' };
        return newState;
      });
  },
});

export const { joinMission } = missionSlice.actions;
export const selectAllMissions = (state) => state.mission;

export default missionSlice.reducer;
