import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let startEditExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
	startEditExpense = jest.fn();
	startRemoveExpense = jest.fn();
	history = { push: jest.fn() };
	wrapper = shallow(
		<EditExpensePage
			history={history}
			startEditExpense={startEditExpense}
			startRemoveExpense={startRemoveExpense}
			expense={expenses[0]}
		/>
	);
});

test('should render EditExpense', () => {
	expect(wrapper).toMatchSnapshot();
});

test('should handle startEditExpense', () => {
	wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
	expect(history.push).toHaveBeenLastCalledWith('/');
	expect(startEditExpense).toHaveBeenLastCalledWith(
		expenses[0].id,
		expenses[0]
	);
});

test('should handle startRemoveExpense', () => {
	wrapper.find('button').simulate('Click');
	expect(history.push).toHaveBeenLastCalledWith('/');
	expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: expenses[0].id });
});
