import initialState from './initialState';
import { SIGNUP_SUCCESS, SIGNUP_REQUEST, SIGNUP_ERROR } from '../actions/types';

export const signUpReducer = (state = initialState, action) => {
	const { payload, type } = action;
	switch (type) {
		case SIGNUP_REQUEST:
			return {
				...state,
				isLoading: true
			};
		case SIGNUP_SUCCESS:
			localStorage.setItem('token', payload.user.user_info.token);
			return {
				...state,
				isLoading: false,
				isSignedUp: true,
				message: payload.user.message,
				user_info: payload.user.user_info,
				errors: {}
			};
		case SIGNUP_ERROR:
			return {
				...state,
				isLoading: false,
				isSignedUp: false,
				errors: action.payload
			};
		default:
			return state;
	}
};