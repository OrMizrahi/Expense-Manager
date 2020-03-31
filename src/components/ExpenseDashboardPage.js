import React from 'react';
import ConnectedExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilter';

export const ExpenseDashboardPage = () => (
	<div>
		<ExpenseListFilter />
		<ConnectedExpenseList />
	</div>
);
