const API = 'https://api.spacexdata.com/v3/rockets';
const GET_ROCKETS = 'space-travellers-hub/rockets/GET_ROCKETS';

const initialState = [];

export const fetchRockets = () => async (dispatch) => {
  const fetched = await fetch(`${API}`);
  const response = await fetched.json();
  const rockets = [];
  response.map((rocket) => rockets.push({
    id: rocket.id,
    rocket_name: rocket.rocket_name,
    description: rocket.description,
    flickr_images: rocket.flickr_images,
  }));

  dispatch({
    type: GET_ROCKETS,
    payload: rockets,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS: return [...action.payload];
    default:
      return state;
  }
};

export const rockets = (state) => state.rocketsReducer;
export default reducer;
