import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  rocketsArray: [],
  loading: false,
};

export const FETCH_ROCKETS_DATA = 'space_traverlers/rockets/FETCH_DATA';

export const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    initRocketsData(state, action) {
      return {
        ...state,
        rocketsArray: action.payload,
      };
    },

    setLoading(state, action) {
      return {
        ...state,
        loading: action.payload,
      };
    },

    updateReservation(state, action) {
      state.rocketsArray.map((rocket) => {
        const mappedRocket = rocket;
        if (mappedRocket.id === action.payload.id) {
          mappedRocket.reserved = action.payload.action === 'add';
        }
        return mappedRocket;
      });
    },
  },
});

export const { setLoading, initRocketsData, updateReservation } = rocketSlice.actions;

export const fetchRocketsData = createAsyncThunk(FETCH_ROCKETS_DATA,
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    if (state.rockets.loading) {
      return null;
    }

    thunkApi.dispatch(setLoading(true));
    const response = await fetch('https://api.spacexdata.com/v3/rockets', {
      method: 'GET',
      header: {
        'Content-Type': 'application/json',
      },
    });

    const responseJSON = await response.json();
    const fetchedData = responseJSON.map((data) => ({
      id: data.id,
      name: data.rocket_name,
      desc: data.description,
      image: data.flickr_images[0],
      url: data.wikipedia,
      reserved: false,
    }));
    thunkApi.dispatch(initRocketsData(fetchedData));
    thunkApi.dispatch(setLoading(false));
    return responseJSON;
  });

export default rocketSlice.reducer;
