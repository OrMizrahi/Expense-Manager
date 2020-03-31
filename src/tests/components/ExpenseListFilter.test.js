import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilter } from '../../components/ExpenseListFilter';
import { filters, altFilters } from '../fixtures/filters';
import moment from 'moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
	setTextFilter = jest.fn();
	sortByAmount = jest.fn();
	sortByDate = jest.fn();
	setEndDate = jest.fn();
	setStartDate = jest.fn();
	wrapper = shallow(
		<ExpenseListFilter
			filters={filters}
			setTextFilter={setTextFilter}
			sortByAmount={sortByAmount}
			sortByDate={sortByDate}
			setEndDate={setEndDate}
			setStartDate={setStartDate}
		/>
	);
});

test('should render ExpenseListFilters', () => {
	expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt Filters', () => {
	wrapper.setProps({
		filters: altFilters
	});
	expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
	wrapper.find('input').simulate('change', {
		target: {
			value: 'blabla'
		}
	});
	expect(setTextFilter).toHaveBeenLastCalledWith('blabla');
});

test('should sort by amount', () => {
	wrapper.find('select').simulate('change', {
		target: {
			value: 'amount'
		}
	});
	expect(sortByAmount).toHaveBeenCalled();
});

test('should sort by date', () => {
	wrapper.setProps({
		filters: altFilters
	});
	wrapper.find('select').simulate('change', {
		target: {
			value: 'date'
		}
	});
	expect(sortByDate).toHaveBeenCalled();
});

test('should handle date changes', () => {
	const start = moment(0);
	const end = moment(0).add(1, 'days');
	wrapper.find('DateRangePicker').prop('onDatesChange')({
		startDate: start,
		endDate: end
	});
	expect(setStartDate).toHaveBeenCalledWith(start);
	expect(setEndDate).toHaveBeenCalledWith(end);
});

test('should handle date focus', () => {
	wrapper.find('DateRangePicker').prop('onFocusChange')('startDate');
	expect(wrapper.state('calendarFocused')).toBe('startDate');
});
