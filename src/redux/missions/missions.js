const apiUrl = 'https://api.spacexdata.com/v3/missions';
const GET_MISSIONS = 'space-travellers-hub/missions/GET_MISSIONS';
const BOOK_MISSION = 'space-travellers-hub/missions/BOOK_MISSION';
const CANCEL_MISSION = 'space-travellers-hub/rockets/CANCEL_BOOKING';

const initialState = [];

export const fetchMissions = () => async (dispatch) => {
  const fetched = await fetch(`${apiUrl}`);
  const response = await fetched.json();
  const missions = [];
  response.map((mission) => missions.push({
    id: mission.mission_id,
    mission_name: mission.mission_name,
    description: mission.description,
  }));

  dispatch({
    type: GET_MISSIONS,
    payload: missions,
  });
};

export const bookMission = (payload) => ({
  type: BOOK_MISSION,
  payload,
});

export const cancelMission = (payload) => ({
  type: CANCEL_MISSION,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS: return [...action.payload];
    case BOOK_MISSION:
      return state.map((mission) => {
        if (mission.id !== action.payload) return mission;
        return { ...mission, reserved: true };
      });
    case CANCEL_MISSION:
      return state.map((mission) => {
        if (mission.id !== action.payload) return mission;
        return { ...mission, reserved: false };
      });
    default:
      return state;
  }
};

export const missions = (state) => state.missionsReducer;
export default reducer;
