import { SIGN_USER_IN_SUCCESS, SIGN_USER_IN_FAIL } from '../actionTypes';

// change to SIGN_UP

const initialState = {};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SIGN_USER_IN_SUCCESS:
      return {
        ...state,
        payload,
      };
    case SIGN_USER_IN_FAIL:
      return {
        ...state,
        payload,
      };
    default:
      return state;
  }
}
