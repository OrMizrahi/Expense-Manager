import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test('should remove expense', () => {
	const result = removeExpense({ id: '123abc' });
	expect(result).toEqual({
		type: 'REMOVE_EXPENSE',
		id: '123abc'
	});
});

test('should edit expense', () => {
	const result = editExpense('123abc', { description: 'updated description' });

	expect(result).toEqual({
		type: 'EDIT_EXPENSE',
		id: '123abc',
		updates: {
			description: 'updated description'
		}
	});
});

test('should add expense with provided values', () => {
	const result = addExpense({
		description: 'demo description',
		createdAt: 70,
		amount: 1000,
		note: 'note demo'
	});

	expect(result).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
			id: expect.any(String),
			description: 'demo description',
			note: 'note demo',
			amount: 1000,
			createdAt: 70
		}
	});
});

test('should add expense with default values', () => {
	const result = addExpense();

	expect(result).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
			id: expect.any(String),
			description: '',
			note: '',
			amount: 0,
			createdAt: 0
		}
	});
});
