import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../../redux/Mission/missionSlice';

function Profile() {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.mission.data);
  const [mission, setMission] = useState([]);
  const [empty, setEmpty] = useState(false);
  useEffect(() => {
    dispatch(getMissions());
    const joinedMisssion = missions.filter((item) => item.member === true);
    setMission(joinedMisssion);
    if (joinedMisssion.length === 0) {
      setEmpty(true);
    }
  }, []);
  return (
    <div>
      <div className="my-missions">
        <div className="header-text">
          <h1>My Missions</h1>
        </div>
        <table>
          <tbody>
            {!empty
              && mission.map((item) => (
                <tr key={item.mission_id}>
                  <td>{item.mission_name}</td>
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
    </div>
  );
}

export default Profile;
