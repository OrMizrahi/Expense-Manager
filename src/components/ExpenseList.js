import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItems';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = props => {
	return (
		<div>
			{props.hiddenExpensesNumber > 0 && (
				<p>Total Hidden Expenses: {props.hiddenExpensesNumber}</p>
			)}
			{props.expenses.length === 0 ? (
				<p>No Expenses To show</p>
			) : (
				props.expenses.map(expense => {
					return <ExpenseListItem {...expense} key={expense.id} />;
				})
			)}
		</div>
	);
};

const mapStateToProps = state => {
	const filteredExpenses = selectExpenses(state.expenses, state.filters);

	return {
		expenses: filteredExpenses,
		hiddenExpensesNumber: state.expenses.length - filteredExpenses.length
	};
};

export default connect(mapStateToProps)(ExpenseList);
