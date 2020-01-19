import {
  CREATE_PROFILE_SUCCESS,
  CREATE_PROFILE_FAIL,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAIL,
} from '../actionTypes';

// change to SIGN_UP
// and hash w/ md5

export const userLogin = data => {
  // ...
  // side effect login logic

  return {
    id,
    email,
    password,
  };
};
