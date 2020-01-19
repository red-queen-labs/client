import axios from 'axios';
import {
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
  SIGN_USER_IN_SUCCESS,
  SIGN_USER_IN_FAIL,
  CREATE_PROFILE_FAIL,
  CREATE_PROFILE_SUCCESS,
} from '../actionTypes';
// import md5 from 'md5'

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const userSignup = formData => async dispatch => {
  const { firstName, lastName, email, password1, password2 } = formData;

  const body = JSON.stringify({
    firstName,
    lastName,
    email,
    password1,
    password2,
  });

  try {
    const res = await axios.post('/api/users/register', body, config);
    dispatch({
      type: CREATE_USER_SUCCESS,
      payload: res,
    });

    const res2 = await axios.post('/api/profiles/register', body, config);
    dispatch({
      type: CREATE_PROFILE_SUCCESS,
      payload: res2,
    });
  } catch (error) {
    dispatch({
      type: CREATE_USER_FAIL,
      payload: error,
    });
    dispatch({
      type: CREATE_PROFILE_FAIL,
      payload: error,
    });
  }
};

export const userLogin = data => async dispatch => {
  const { email, password } = data;

  // const password_hash = md5(password);
  const body = JSON.stringify({
    email,
    // password_hash,
  });

  try {
    const res = await axios.post('/api/users/login', body, config);

    dispatch({
      type: SIGN_USER_IN_SUCCESS,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: SIGN_USER_IN_FAIL,
      payload: error,
    });
  }
};
