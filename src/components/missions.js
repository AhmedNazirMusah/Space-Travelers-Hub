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
    <div className="px-10 py-8">
      <table className="table-auto">
        <thead>
          <tr className="h-[3rem] border-2 border-zinc-400 text-[1.1rem]">
            <th className="border-2 border-zinc-400 text-left p-2">Mission</th>
            <th className="border-2 border-zinc-400 text-left p-2">Description</th>
            <th className="border-2 border-zinc-400 text-left p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <Mission key={mission.id} mission={mission} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
