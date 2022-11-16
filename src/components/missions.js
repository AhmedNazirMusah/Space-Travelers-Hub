import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../redux/missions/missions';
import Mission from './mission';

const Missions = () => {
  const missions = useSelector((state) => state.missionsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!missions.length > 0) {
      dispatch(fetchMissions());
    }
  }, []);
  return (
    <table className="table-fixed">
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => (
          <Mission key={mission.id} mission={mission} />
        ))}
      </tbody>
    </table>
  );
};

export default Missions;
