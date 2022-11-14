import React from 'react';
import Table from 'react-bootstrap/Table';
import '../../styles/mission.css';

function MissionContainer() {
  return (
    <div className="container">
      <Table striped bordered hover size="lg">
        <thead>
          <tr>
            <th>Missions</th>
            <th colSpan={4}>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td colSpan={4}>
              Mark Mark Mark Mark Mark Mark Mark Mark Mark Mark
            </td>
            <td>
              <button type="button" className="not-member p-2">
                Not a Member
              </button>
            </td>
            <td>
              <button type="button" className="join rounded-1 p-1">
                Join Mission
              </button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default MissionContainer;
