import expenses from '../fixtures/expenses';
import selectExpensesTotal from '../../selectors/selectExpensesTotal';

test('should return 0 if no expenses', () => {
	let sum = selectExpensesTotal([]);
	expect(sum).toBe(0);
});

test('should correctly add up a single expense', () => {
	let sum = selectExpensesTotal([expenses[0]]);
	expect(sum).toBe(expenses[0].amount);
});

test('should correctly add up multiple expenses', () => {
	let sum = selectExpensesTotal(expenses);
	expect(sum).toBe(
		expenses[0].amount + expenses[1].amount + expenses[2].amount
	);
});
