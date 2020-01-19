import {
  CREATE_PROFILE_SUCCESS,
  CREATE_PROFILE_FAIL,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAIL,
} from '../actionTypes';

const initialState = {};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_PROFILE_SUCCESS:
    case EDIT_PROFILE_SUCCESS:
      return {
        ...state,
        payload,
      };
    case CREATE_PROFILE_FAIL:
    case EDIT_PROFILE_FAIL:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
}
