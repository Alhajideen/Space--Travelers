import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ExternalLink } from 'react-external-link';
import { updateReservation } from '../../redux/Rockets/rocketSlice';
import '../../styles/profile.css';

const Profile = () => {
  const missions = useSelector((state) => state.mission.data);
  const rockets = useSelector((state) => state.rockets.rocketsArray);
  const [reservedRockets, setReservedRockets] = useState([]);
  const [mission, setMission] = useState([]);
  const [empty, setEmpty] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const joinedMisssion = missions.filter((item) => item.member === true);
    setMission(joinedMisssion);
    if (joinedMisssion.length === 0) {
      setEmpty(true);
    }
  }, []);

  useEffect(() => {
    setReservedRockets(rockets.filter((rocket) => rocket.reserved));
  }, [rockets]);

  const cancelResertvation = (id) => {
    dispatch(
      updateReservation({
        id,
        action: 'cancel',
      }),
    );
  };
  return (
    <div className="profile">
      <div className="my-missions">
        <div className="header-text">
          <h2>My Missions</h2>
        </div>
        <table className="mission-table">
          <tbody className="mission-tbody">
            {!empty
              && mission.map((item) => (
                <tr key={item.mission_id}>
                  <td className="mission-data">{item.mission_name}</td>
                </tr>
              ))}
            {empty && (
              <tr>
                <td>You have not joined any mission.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div>
        <div>
          <h2>My Rockets</h2>
        </div>
        <table>
          <tbody>
            {
              reservedRockets.length ? reservedRockets.map((rocket) => (
                <tr key={rocket.id}>
                  <td>{rocket.name}</td>
                  <td><button type="button" onClick={() => cancelResertvation(rocket.id)}>Cancel Reservation</button></td>
                  <td>
                    <ExternalLink href={rocket.url}>
                      Read more
                    </ExternalLink>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td>You have not reserved any rocket.</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
