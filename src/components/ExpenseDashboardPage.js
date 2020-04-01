import React from 'react';
import ConnectedExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilter';
import ConnectedExpensesSummary from './ExpensesSummary';

export const ExpenseDashboardPage = () => (
	<div>
		<ConnectedExpensesSummary />
		<ExpenseListFilter />
		<ConnectedExpenseList />
	</div>
);
