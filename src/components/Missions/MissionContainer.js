import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import '../../styles/mission.css';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions, joinMission } from '../../redux/Mission/missionSlice';

function MissionContainer() {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.mission.data);
  useEffect(() => {
    dispatch(getMissions());
    setTimeout(() => {
      // console.log(missions.data);
    }, 100);
  }, []);

  const handleMember = (id) => {
    dispatch(joinMission(id));
    // console.log(missions);
  };
  return (
    <div className="mission-container my-3">
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Missions</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id} className="table-rows">
              <td className="mission-name">{mission.mission_name}</td>
              <td>{mission.description}</td>
              <td className="status">
                <button type="button" className="not-member p-1">
                  Not a Member
                </button>
              </td>
              <td className="status">
                <button
                  type="button"
                  className="join rounded-1 p-1"
                  onClick={() => handleMember(mission.mission_id)}
                >
                  Join Mission
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default MissionContainer;
