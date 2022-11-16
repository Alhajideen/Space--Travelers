import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateReservation } from '../../redux/Rockets/rocketSlice';

const Rockets = () => {
  const { rocketsArray, loading } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  const handleReservation = (id, reserved) => {
    dispatch(updateReservation({
      id,
      action: reserved ? 'cancel' : 'add',
    }));
  };

  return (
    <ul className="rockets">
      {
        loading ? 'Fetching' : rocketsArray.map((rocket) => (
          <li key={rocket.id} className="rocket">
            <img src={rocket.image} alt="Rocket" />
            <div>{rocket.name}</div>
            <div>
              {rocket.reserved ? (<span>Reserved</span>) : ''}
              {' '}
              {rocket.desc}
            </div>
            <button type="button" className="reserve-btn" onClick={() => handleReservation(rocket.id, rocket.reserved)}>{rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket' }</button>
          </li>
        ))
      }
    </ul>
  );
};

export default Rockets;
