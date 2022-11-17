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
      <div className="flex justify-start gap-12">
        <div className="min-w-[25rem]">
          <img
            src={rocket.flickr_images[0]}
            className="object-cover h-[15rem] w-full rounded-sm"
            alt="rocketname"
          />
        </div>
        <div className="rocket-description">
          <h2 className="text-[1.5rem] font-bold">{rocket.rocket_name}</h2>
          <span>
            {rocket.reserved ? (
              <p className="text-[0.8rem] rounded-md p-1 text-white mt-2 bg-sky-500 w-fit">Reserved</p>
            ) : null}
          </span>
          <p className="leading-loose mt-4">{rocket.description}</p>
          {rocket.reserved ? (
            <button
              className="bg-zinc-100 rounded-md shadow-md p-2 mt-4 hover:bg-zinc-200 tracking-wide"
              type="button"
              onClick={() => cancelBookedRocket(rocket.id)}
            >
              {' '}
              Cancel Reservation
            </button>
          ) : (
            <button
              type="button"
              className="bg-blue-600 shadow-md p-2 text-white hover:bg-blue-700 rounded-md mt-4 tracking-wide"
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
