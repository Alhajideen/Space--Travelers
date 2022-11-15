import React from 'react';
import { useSelector } from 'react-redux';

const Rockets = () => {
  const { rocketsArray, loading } = useSelector((state) => state.rockets);
  return (
    <ul className="rockets">
      {
        loading ? 'Fetching' : rocketsArray.map((rocket) => (
          <li key={rocket.id} className="rocket">
            <img src={rocket.image} alt="Rocket" />
            <div>{rocket.name}</div>
            <div>{rocket.desc}</div>
          </li>
        ))
      }
    </ul>
  );
};

export default Rockets;
