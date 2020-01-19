import {
  ADD_BUILDING_SUCCESS,
  ADD_BUILDING_FAIL,
  REMOVE_BUILDING_SUCCESS,
  REMOVE_BUILDING_FAIL,
} from '../actionTypes';

export const addBuildingToList = data => {
  return {
    type: ADD_BUILDING_SUCCESS,
    payload: {
      ...data,
    },
  };
};

export const removeBuildingFromList = data => {
  return {
    type: REMOVE_BUILDING_SUCCESS,
    payload: id,
  };
};
