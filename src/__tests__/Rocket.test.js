import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Rocket from '../components/rockets/Rockets';
import configureStore from '../redux/store';

it('renders correctly', () => {
  const rocket = renderer
    .create(<Provider store={configureStore}><Rocket /></Provider>)
    .toJSON();
  expect(rocket).toMatchSnapshot();
});
