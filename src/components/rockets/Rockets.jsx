import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addReservation } from '../../redux/Rockets/rocketSlice';

const Rockets = () => {
  const { rocketsArray, loading } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(addReservation(id));
  };

  return (
    <ul className="rockets">
      {
        loading ? 'Fetching' : rocketsArray.map((rocket) => (
          <li key={rocket.id} className="rocket">
            <img src={rocket.image} alt="Rocket" />
            <div>{rocket.name}</div>
            <div>{rocket.desc}</div>
            <button type="button" className="reserve-btn" onClick={() => handleClick(rocket.id)}> Reserve Rocket</button>
          </li>
        ))
      }
    </ul>
  );
};

export default Rockets;
