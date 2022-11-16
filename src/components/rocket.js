/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { bookRocket, cancelBooking } from '../redux/rockets/rockets';

const Rocket = ({ rocket }) => {
  const dispatch = useDispatch();

  const cancelBookedRocket = (id) => {
    dispatch(cancelBooking(id));
  };

  const activateBooking = (id) => {
    dispatch(bookRocket(id));
  };
  return (
    <li key={rocket.id}>
      <div>
        <div>
          <img
            src={rocket.flickr_images[0]}
            className="rocket-image"
            alt="rocketname"
          />
        </div>
        <div className="rocket-description">
          <h2>{rocket.rocket_name}</h2>
          <span>
            {rocket.reserved ? (
              <p>reserved</p>
            ) : null}
          </span>
          <p>{rocket.description}</p>
          {rocket.reserved ? (
            <button
              type="button"
              onClick={() => cancelBookedRocket(rocket.id)}
            >
              {' '}
              Cancel Reservation
            </button>
          ) : (
            <button
              type="button"
              onClick={() => activateBooking(rocket.id)}
            >
              Reserve Rocket
            </button>
          )}
        </div>
      </div>
    </li>
  );
};

export default Rocket;
