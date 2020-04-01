import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should render ExpenseForm without expense', () => {
	const wrapper = shallow(<ExpenseForm />);
	expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm with expense', () => {
	const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
	expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
	const wrapper = shallow(<ExpenseForm />);
	expect(wrapper).toMatchSnapshot();
	wrapper.find('form').simulate('submit', {
		preventDefault: () => {}
	});
	expect(wrapper.state('error').length).toBeGreaterThan(0);
	expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
	const wrapper = shallow(<ExpenseForm />);
	wrapper
		.find('input')
		.at(0)
		.simulate('change', {
			target: {
				value: 'new description'
			}
		});
	expect(wrapper.state('description')).toBe('new description');
});

test('should set note on input change', () => {
	const wrapper = shallow(<ExpenseForm />);
	wrapper
		.find('textarea')
		.at(0)
		.simulate('change', {
			target: {
				value: 'new note'
			}
		});
	expect(wrapper.state('note')).toBe('new note');
});

test('should set valid amount on input change', () => {
	const wrapper = shallow(<ExpenseForm />);
	wrapper
		.find('input')
		.at(1)
		.simulate('change', {
			target: {
				value: '21.07'
			}
		});
	expect(wrapper.state('amount')).toBe('21.07');
});

test('should not set invalid amount on input change', () => {
	const wrapper = shallow(<ExpenseForm />);
	wrapper
		.find('input')
		.at(1)
		.simulate('change', {
			target: {
				value: '46.123'
			}
		});
	expect(wrapper.state('amount')).toBe('');
});

test('should call onSubmit prop for valid form submissions', () => {
	const onSubmitSpy = jest.fn();
	const wrapper = shallow(
		<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />
	);
	wrapper.find('form').simulate('submit', {
		preventDefault: () => {}
	});
	expect(wrapper.state('error')).toBe('');
	expect(onSubmitSpy).toHaveBeenLastCalledWith({
		description: expenses[0].description,
		amount: expenses[0].amount,
		note: expenses[0].note,
		createdAt: expenses[0].createdAt
	});
});

test('should set new date on date change', () => {
	const now = moment();
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('SingleDatePicker').prop('onDateChange')(now);
	expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set new calendarFocusd on Focus change', () => {
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused: true });
	expect(wrapper.state('calendarFocused')).toBe(true);
});

test('should set text to the button', () => {
	const wrapper = shallow(<ExpenseForm buttonName='demo name' />);
	expect(wrapper.find('button').text()).toBe('demo name');
});
