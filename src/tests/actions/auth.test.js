import { login, logout } from '../../actions/auth';

test('should handle login ', () => {
	const action = login(111);
	expect(action).toEqual({
		type: 'LOGIN',
		uid: 111,
	});
});

test('should handle logout ', () => {
	const action = logout();
	expect(action).toEqual({
		type: 'LOGOUT',
	});
});
