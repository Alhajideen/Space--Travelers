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

describe('Profile page', () => {
  test('should display a reserved rocket', async () => {
    expect(spyFunc).toBeCalled();
    const rocketList = screen.getByTestId('rocket-list');
    await waitFor(() => expect(rocketList.querySelectorAll('li').length).toBe(1));
    const reservedBtn = screen.getByTestId('btn-1');
    fireEvent.click(reservedBtn);
    await waitFor(() => expect(reservedBtn.textContent).toBe('Cancel Reservation'));
    const profileBtn = screen.getByTestId('profile-btn');
    fireEvent.click(profileBtn);
    const reservedRocketsSection = screen.getByTestId('reserved-rockets');
    await waitFor(() => expect(reservedRocketsSection).toBeInTheDocument());
    const tBodyChildren = reservedRocketsSection.querySelectorAll('tbody > *');
    await waitFor(() => expect(tBodyChildren.length).toBe(1));
  });
});
