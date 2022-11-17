import '@testing-library/jest-dom';
import {
  render, screen, waitFor, fireEvent,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../redux/store';
import App from '../../App';

const rocketData = [{
  id: 1,
  rocket_name: 'test rocket',
  description: 'test description',
  flickr_images: ['https://i.imgur.com/DaCfMsj.jpg'],
  wikipedia: 'https://en.wikipedia.org/wiki/Falcon_1',
}];

let spyFunc;
beforeEach(() => {
  spyFunc = jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(rocketData),
  });
  render(
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>,
  );
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe('Rockets page', () => {
  test('should display a rocket', async () => {
    expect(spyFunc).toBeCalled();
    const rocketList = screen.getByTestId('rocket-list');
    await waitFor(() => expect(rocketList.querySelectorAll('li').length).toBe(1));
  });

  test('reserve a rocket', async () => {
    const reservedBtn = screen.getByTestId('btn-1');
    fireEvent.click(reservedBtn);
    await waitFor(() => expect(reservedBtn.textContent).toBe('Cancel Reservation'));
  });

  test('cancel a rocket reservation', async () => {
    const toggleReservation = screen.getByTestId('btn-1');
    fireEvent.click(toggleReservation);
    fireEvent.click(toggleReservation);
    await waitFor(() => expect(toggleReservation.textContent).toBe('Reserve Rocket'));
  });
});
