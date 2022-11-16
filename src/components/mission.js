/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { bookMission, cancelMission } from '../redux/missions/missions';

const Mission = ({ mission }) => {
  const dispatch = useDispatch();

  const bookAction = (id) => {
    dispatch(bookMission(id));
  };

  const cancelAction = (id) => {
    dispatch(cancelMission(id));
  };

  return (
    <tr key={mission.id}>
      <td>{mission.mission_name}</td>
      <td>{mission.description}</td>
      <td>
        {mission.reserved ? (
          <p>ACTIVE MEMBER</p>
        ) : (
          <p>NOT A MEMBER</p>
        )}

      </td>
      <td>
        {mission.reserved ? (
          <button
            type="button"
            onClick={() => cancelAction(mission.id)}
          >
            {' '}
            Cancel Mission
          </button>
        ) : (
          <button
            type="button"
            onClick={() => bookAction(mission.id)}
          >
            Join Mission
          </button>
        )}

      </td>
    </tr>
  );
};

export default Mission;
