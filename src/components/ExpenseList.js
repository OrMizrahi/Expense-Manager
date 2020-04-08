import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItems';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => {
	return (
		<div className='content-container'>
			<div className='list-header'>
				<div className='show-for-mobile'>Expenses</div>
				<div className='show-for-desktop'>Expense</div>
				<div className='show-for-desktop'>Amount</div>
			</div>
			<div className='list-body'>
				{props.hiddenExpensesNumber > 0 && (
					<p>Total Hidden Expenses: {props.hiddenExpensesNumber}</p>
				)}
				{props.expenses.length === 0 ? (
					<div className='list-item  list-item--message'>
						<span>No Expenses To show</span>
					</div>
				) : (
					props.expenses.map((expense) => {
						return <ExpenseListItem {...expense} key={expense.id} />;
					})
				)}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	const filteredExpenses = selectExpenses(state.expenses, state.filters);

	return {
		expenses: filteredExpenses,
		hiddenExpensesNumber: state.expenses.length - filteredExpenses.length,
	};
};

export default connect(mapStateToProps)(ExpenseList);
