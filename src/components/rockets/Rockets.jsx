import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateReservation } from '../../redux/Rockets/rocketSlice';
import '../../styles/rocket.css';

const Rockets = () => {
  const { rocketsArray, loading } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  const handleReservation = (id, reserved) => {
    dispatch(
      updateReservation({
        id,
        action: reserved ? 'cancel' : 'add',
      }),
    );
  };

  return (
    <section className="rockets-container">
      <ul className="rockets-list">
        {loading
          ? 'Fetching Data'
          : rocketsArray.map((rocket) => (
            <li key={rocket.id} className="rocket">
              <img src={rocket.image} alt="Rocket" className="rocket-img" />
              <div className="rocket-info">
                <h3 className="rocket-name">{rocket.name}</h3>
                <p className="rocket-desc">
                  {rocket.reserved ? <span className="rocket-badge">Reserved</span> : ''}
                  {' '}
                  {rocket.desc}
                </p>
                <button
                  type="button"
                  className={rocket.reserved ? 'cancel-btn' : 'res-btn'}
                  onClick={() => handleReservation(rocket.id, rocket.reserved)}
                >
                  {rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
                </button>
              </div>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default Rockets;
