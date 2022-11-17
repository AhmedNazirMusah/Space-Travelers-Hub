import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cancelBooking } from '../redux/rockets/rockets';

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
      </div>
    </div>
  );
};

export default Profile;
