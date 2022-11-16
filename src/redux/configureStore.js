import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rocketsReducer from './rockets/rockets';
import missionsReducer from './missions/missions';

const reducer = combineReducers({ rocketsReducer, missionsReducer });

const store = createStore(
  reducer,
  applyMiddleware(logger, thunkMiddleware),
);

export default store;
