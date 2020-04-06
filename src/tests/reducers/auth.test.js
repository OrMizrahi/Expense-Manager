import authReducers from '../../reducers/auth';

test('should set uid on login', () => {
	const action = {
		type: 'LOGIN',
		uid: 123,
	};

	const state = authReducers({}, action);
	expect(state.uid).toBe(123);
});

test('should remove uid on logout', () => {
	const action = {
		type: 'LOGOUT',
	};

	const state = authReducers({ uid: 'blsblals' }, action);
	expect(state).toEqual({});
});
