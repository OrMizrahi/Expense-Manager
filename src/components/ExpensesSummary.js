import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/selectExpensesTotal';
import numeral from 'numeral';
import { Link } from 'react-router-dom';

export const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
	const singleOrPlural = expensesCount === 1 ? 'expense' : 'expenses';
	const formattedAmount = numeral(expensesTotal / 100).format('$0, 0.0');

	return (
		<div className='page-header'>
			<div className='content-container'>
				<h1 className='page-header__title'>
					Viewing <span>{expensesCount} </span>
					{singleOrPlural} totalling <span>{formattedAmount}</span>
				</h1>
				<div className='page-header__actions'>
					<Link className='button' to='/create'>
						Add Expense
					</Link>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	const selectedExpenses = selectExpenses(state.expenses, state.filters);

	return {
		expensesCount: selectedExpenses.length,
		expensesTotal: expensesTotal(selectedExpenses),
	};
};

export default connect(mapStateToProps)(ExpensesSummary);
