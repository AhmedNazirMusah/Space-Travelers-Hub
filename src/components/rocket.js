/* eslint-disable react/prop-types */

const Rocket = ({ rocket }) => (
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
        <p>{rocket.description}</p>
        <button type="button">
          Reservation Rocket
        </button>
      </div>
    </div>
  </li>
);

export default Rocket;
