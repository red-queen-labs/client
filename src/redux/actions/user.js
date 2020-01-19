import axios from 'axios';
import {
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
  SIGN_USER_IN_SUCCESS,
  SIGN_USER_IN_FAIL,
} from '../actionTypes';

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
    const res = axios.post('/api/______', body, config);

    dispatch({
      type: CREATE_USER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_USER_FAIL,
      payload: error,
    });
  }
};

export const userLogin = async data => dispatch => {
  const { email, password } = data;

  dispatch({
    type: SIGN_USER_IN_SUCCESS,
    payload: {
      email,
      password,
    },
  });

  // try {
  //   const res = await axios.post();

  //   return {
  //     type: SIGN_USER_IN_SUCCESS,
  //     payload: {
  //       id: res.id,
  //       email: res.email,
  //       password: res.password,
  //     },
  //   };
  // } catch (error) {
  //   return {
  //     type: SIGN_USER_IN_FAIL,
  //     payload: {
  //       error,
  //     },
  //   };
  // }
};
