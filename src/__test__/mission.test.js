import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/store';
import MissionContainer from '../components/Missions/MissionContainer';
import Profile from '../components/Profile/Profile';
import '@testing-library/jest-dom';

describe('Testing Profile and Mission Components', () => {
  it('Testing MissionContainer components', () => {
    const myMission = render(
      <React.StrictMode>
        <Router>
          <Provider store={store}>
            <MissionContainer />
          </Provider>
        </Router>
      </React.StrictMode>
    );
    expect(myMission).toMatchSnapshot();
  });

  it('Testing MissionContainer components', () => {
    const profile = render(
      <React.StrictMode>
        <Router>
          <Provider store={store}>
            <Profile />
          </Provider>
        </Router>
      </React.StrictMode>
    );
    expect(profile).toMatchSnapshot();
  });
});
