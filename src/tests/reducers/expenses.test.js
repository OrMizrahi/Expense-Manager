import expenseReducers from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
	const state = expenseReducers(undefined, { type: '@@INIT' });
	expect(state).toEqual([]);
});

test('should remove expense by id', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: expenses[0].id
	};
	const state = expenseReducers(expenses, action);
	expect(state).toEqual([expenses[1], expenses[2]]);
});

test('should not remove by invalid id', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: -3432
	};
	const state = expenseReducers(expenses, action);
	expect(state).toEqual([expenses[0], expenses[1], expenses[2]]);
});

test('should edit expense', () => {
	const action = {
		type: 'EDIT_EXPENSE',
		id: expenses[2].id,
		updates: {
			description: 'omg'
		}
	};
	const state = expenseReducers(expenses, action);
	expect(state[2].description).toBe('omg');
});

test('should not edit expense by invalid id', () => {
	const action = {
		type: 'EDIT_EXPENSE',
		id: -3453,
		updates: {
			description: 'omg'
		}
	};
	const state = expenseReducers(expenses, action);
	expect(state).toEqual(expenses);
});

test('should add expense', () => {
	const action = {
		type: 'ADD_EXPENSE',
		expense: {
			description: 'new one',
			note: 'demo note2',
			amount: 32432,
			createdAt: 0,
			id: 3
		}
	};
	const state = expenseReducers(expenses, action);
	expect(state).toEqual([...expenses, action.expense]);
});

test('should set expenses', () => {
	const action = {
		type: 'SET_EXPENSES',
		expenses: [expenses[2]]
	};
	const state = expenseReducers(expenses, action);
	expect(state).toEqual([expenses[2]]);
});
