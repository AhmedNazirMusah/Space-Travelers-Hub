const apiUrl = 'https://api.spacexdata.com/v3/missions';
const GET_MISSIONS = 'space-travellers-hub/missions/GET_MISSIONS';

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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS: return [...action.payload];
    default:
      return state;
  }
};

export const missions = (state) => state.missionsReducer;
export default reducer;
