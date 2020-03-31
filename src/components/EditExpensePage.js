import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
	onSubmit = expense => {
		this.props.editExpense(this.props.expense.id, expense);
		this.props.history.push('/');
	};

	onRemove = () => {
		this.props.removeExpense({ id: this.props.expense.id });
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
		editExpense: (id, expense) => dispatch(editExpense(id, expense)),
		removeExpense: id => dispatch(removeExpense(id))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
