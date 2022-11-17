import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cancelBooking } from '../redux/rockets/rockets';
import { cancelMission } from '../redux/missions/missions';

const Profile = () => {
  const dispatch = useDispatch();

  const rocketState = useSelector((state) => state.rocketsReducer);
  const reservedRockets = rocketState.filter((rocket) => rocket.reserved).length === 0
    ? <p>No rockets reserved </p>
    : rocketState.filter((rocket) => rocket.reserved).map((rocket) => (
      <div key={rocket.id}>
        <div>
          <h2>{rocket.rocket_name}</h2>
        </div>
        <button type="button" onClick={() => dispatch(cancelBooking(rocket.id))}>Cancel Reservation</button>
      </div>
    ));

  const missionState = useSelector((state) => state.missionsReducer);
  const reservedMissions = missionState.filter((mission) => mission.reserved).length === 0
    ? <p>No Missions reserved </p>
    : missionState.filter((mission) => mission.reserved).map((mission) => (
      <div key={mission.id}>
        <div>
          <h2>{mission.mission_name}</h2>
        </div>
        <button type="button" onClick={() => dispatch(cancelMission(mission.id))}>Cancel Reservation</button>
      </div>
    ));

  return (
    <div>
      <div className="profile">
        <div>
          <h2>My Rockets</h2>
          <ul>
            <li>
              {reservedRockets}
            </li>
          </ul>
        </div>
        <div>
          <h2>My Missions</h2>
          <ul>
            <li>
              {reservedMissions}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
