import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
	editExpense = jest.fn();
	removeExpense = jest.fn();
	history = { push: jest.fn() };
	wrapper = shallow(
		<EditExpensePage
			history={history}
			editExpense={editExpense}
			removeExpense={removeExpense}
			expense={expenses[0]}
		/>
	);
});

test('should render EditExpense', () => {
	expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
	wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
	expect(history.push).toHaveBeenLastCalledWith('/');
	expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
});

test('should handle removeExpense', () => {
	wrapper.find('button').simulate('Click');
	expect(history.push).toHaveBeenLastCalledWith('/');
	expect(removeExpense).toHaveBeenLastCalledWith({ id: expenses[0].id });
});
