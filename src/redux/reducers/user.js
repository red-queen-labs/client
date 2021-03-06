import {
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
  SIGN_USER_IN_SUCCESS,
  SIGN_USER_IN_FAIL,
} from '../actionTypes';

const initialState = {};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_USER_SUCCESS:
    case SIGN_USER_IN_SUCCESS:
      return {
        ...state,
        ...payload,
      };
    case CREATE_USER_FAIL:
    case SIGN_USER_IN_FAIL:
      return {
        ...state,
        payload,
      };
    default:
      return state;
  }
}
