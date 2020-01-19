import {
  ADD_BUILDING_SUCCESS,
  ADD_BUILDING_FAIL,
  REMOVE_BUILDING_SUCCESS,
  REMOVE_BUILDING_FAIL,
} from '../actionTypes';

const initialState = [];

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_BUILDING_SUCCESS:
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter(alert => alert.id !== payload);
    default:
      return state;
  }
}
