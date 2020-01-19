import { SIGN_USER_IN_SUCCESS, SIGN_USER_IN_FAIL } from '../actionTypes';

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
