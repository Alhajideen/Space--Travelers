import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function Profile() {
  const missions = useSelector((state) => state.mission.data);
  const [mission, setMission] = useState([]);
  const [empty, setEmpty] = useState(false);
  useEffect(() => {
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
