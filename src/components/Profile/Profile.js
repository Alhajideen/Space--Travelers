import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import '../../styles/profile.css';

const Profile = () => {
  const missions = useSelector((state) => state.mission.data);
  const rockets = useSelector((state) => state.rockets.rocketsArray);
  const [reservedRockets, setReservedRockets] = useState([]);
  const [mission, setMission] = useState([]);
  const [empty, setEmpty] = useState(false);

  useEffect(() => {
    const joinedMisssion = missions.filter((item) => item.member === true);
    setMission(joinedMisssion);
    if (joinedMisssion.length === 0) {
      setEmpty(true);
    }
    setReservedRockets(rockets.filter((rocket) => rocket.reserved));
  }, []);

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
