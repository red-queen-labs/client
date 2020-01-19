import {
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAIL,
} from '../actionTypes';
import axios from 'axios';

// change to SIGN_UP
// and hash w/ md5

export const profileEdit = data => async dispatcher => {
  // ...
	// side effect login logic

	const { changes } = data;
	const body = JSON.stringify({
		changes
	});
	
	try {
		const res = await axios.put('/api/profiles/edit', body, config);

		dispatcher({
			type: EDIT_PROFILE_SUCCESS,
			payload: res
		});
	} catch (error) {
		dispatcher({
			type: EDIT_PROFILE_FAIL,
			payload: error
		});
	}
};
