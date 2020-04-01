import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/selectExpensesTotal';
import numeral from 'numeral';

export const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
	const singleOrPlural = expensesCount === 1 ? 'expense' : 'expenses';
	const formattedAmount = numeral(expensesTotal / 100).format('$0, 0.0');

	return (
		<div>
			<h1>
				Viewing {expensesCount} {singleOrPlural} totalling {formattedAmount}
			</h1>
		</div>
	);
};

const mapStateToProps = state => {
	const selectedExpenses = selectExpenses(state.expenses, state.filters);

	return {
		expensesCount: selectedExpenses.length,
		expensesTotal: expensesTotal(selectedExpenses)
	};
};

export default connect(mapStateToProps)(ExpensesSummary);
