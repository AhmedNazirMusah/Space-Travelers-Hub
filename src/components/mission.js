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
    <tr key={mission.id} className="odd:bg-zinc-200">
      <td className="border-2 border-zinc-400 p-2 font-bold text-[1.1rem]">{mission.mission_name}</td>
      <td className="w-[60%] border-2 border-zinc-400 p-2">{mission.description}</td>
      <td className="w-[15%] border-2 border-zinc-400 text-center">
        <div className="flex justify-center">
          {mission.reserved ? (
            <p className="bg-sky-400 rounded-md p-2 text-white ">Active Member</p>
          ) : (
            <p className="text-white bg-zinc-500 p-2 rounded-md">NOT A MEMBER</p>
          )}
        </div>
      </td>
      <td className="w-[15%] border-2 border-zinc-400 text-center">
        {mission.reserved ? (
          <button
            className="border-2 border-red-500 rounded-md text-red-700 p-2 hover:bg-red-500 hover:text-white tracking-wide"
            type="button"
            onClick={() => cancelAction(mission.id)}
          >
            {' '}
            Cancel Mission
          </button>
        ) : (
          <button
            className="bg-blue-600 rounded-md shadow-md p-2 text-white hover:bg-blue-700 tracking-wide"
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
