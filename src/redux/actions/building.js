import {
  ADD_BUILDING_SUCCESS,
  ADD_BUILDING_FAIL,
  REMOVE_BUILDING_SUCCESS,
  REMOVE_BUILDING_FAIL,
} from '../actionTypes';
import axios from 'axios';

export const addBuildingToList = data => async dispatcher => {
// SKIPPED -Ben
	const { building } = data;

	const body = JSON.stringify({
		building
	});

	try {
		const res = await axios.post('/api/profiles/save/building', body, config);
		dispatcher({
			type: ADD_BUILDING_SUCCESS,
			payload: res,
		});
	} catch (e) {
		dispatcher({
			type: ADD_BUILDING_FAIL,
			payload: e
		})
	}
	
	
};

export const removeBuildingFromList = data => async dispatcher => {
  const { building } = data;

	const body = JSON.stringify({
		building
	});

	try {
		const res = await axios.post('/api/profiles/save/building', body, config);
		dispatcher({
			type: ADD_BUILDING_SUCCESS,
			payload: res,
		});
	} catch (e) {
		dispatcher({
			type: ADD_BUILDING_FAIL,
			payload: e
		})
	}
};
