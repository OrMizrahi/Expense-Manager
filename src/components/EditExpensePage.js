import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startRemoveExpense, startEditExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
	onSubmit = expense => {
		this.props.startEditExpense(this.props.expense.id, expense);
		this.props.history.push('/');
	};

	onRemove = () => {
		this.props.startRemoveExpense({ id: this.props.expense.id });
		this.props.history.push('/');
	};

	render() {
		return (
			<div>
				<ExpenseForm
					onSubmit={this.onSubmit}
					expense={this.props.expense}
					buttonName='Edit Expense'
				/>
				<button onClick={this.onRemove}>Remove item</button>
			</div>
		);
	}
}

const mapStateToProps = (state, props) => {
	return {
		expense: state.expenses.find(
			expense => expense.id === props.match.params.id
		)
	};
};

const mapDispatchToProps = (dispatch, props) => {
	return {
		startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
		startRemoveExpense: id => dispatch(startRemoveExpense(id))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
