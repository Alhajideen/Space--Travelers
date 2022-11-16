import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import '../../styles/mission.css';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions, joinMission } from '../../redux/Mission/missionSlice';

const MissionContainer = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.mission.data);

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(getMissions());
    }
  }, [dispatch]);

  const handleMember = (id) => {
    dispatch(joinMission(id));
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
          {missions.map((mission) => {
            if (!mission.member) {
              return (
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
              );
            }
            return (
              <tr key={mission.mission_id} className="table-rows">
                <td className="mission-name">{mission.mission_name}</td>
                <td>{mission.description}</td>
                <td className="status">
                  <button type="button" className="member p-1">
                    Active Member
                  </button>
                </td>
                <td className="status">
                  <button
                    type="button"
                    className="leave p-1"
                    onClick={() => handleMember(mission.mission_id)}
                  >
                    Leave Mission
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default MissionContainer;
