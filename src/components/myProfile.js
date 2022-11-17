import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cancelBooking } from '../redux/rockets/rockets';
import { cancelMission } from '../redux/missions/missions';

const Profile = () => {
  const dispatch = useDispatch();

  const rocketState = useSelector((state) => state.rocketsReducer);
  const reservedRockets = rocketState.filter((rocket) => rocket.reserved).length === 0
    ? <p className="text-[1.2rem]">No rockets reserved </p>
    : rocketState.filter((rocket) => rocket.reserved).map((rocket) => (
      <div key={rocket.id} className="flex justify-between items-center gap-[7rem] border-2 rounded-sm p-4">
        <h2 className="text-[1.2rem]">{rocket.rocket_name}</h2>
        <button className="border-2 border-red-500 rounded-md text-red-700 p-2 hover:bg-red-500 hover:text-white tracking-wide" type="button" onClick={() => dispatch(cancelBooking(rocket.id))}>Cancel Reservation</button>
      </div>
    ));

  const missionState = useSelector((state) => state.missionsReducer);
  const reservedMissions = missionState.filter((mission) => mission.reserved).length === 0
    ? <p className="text-[1.2rem]">No Missions reserved </p>
    : missionState.filter((mission) => mission.reserved).map((mission) => (
      <div key={mission.id} className="flex justify-between items-center gap-[7rem] border-2 rounded-sm p-4">
        <h2 className="text-[1.2rem]">{mission.mission_name}</h2>
        <button className="border-2 border-red-500 rounded-md text-red-700 p-2 hover:bg-red-500 hover:text-white tracking-wide" type="button" onClick={() => dispatch(cancelMission(mission.id))}>Cancel Mission</button>
      </div>
    ));

  return (
    <div className="px-12 py-10">
      <div className="flex gap-[25rem]">
        <div>
          <h2 className="text-[2.5rem] font-bold">My Rockets</h2>
          <ul>
            <li className="flex flex-col gap-6 mt-6">
              {reservedRockets}
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-[2.5rem] font-bold">My Missions</h2>
          <ul>
            <li className="flex flex-col gap-6 mt-6">
              {reservedMissions}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
