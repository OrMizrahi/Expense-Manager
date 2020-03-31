import {
	setStartDate,
	setEndDate,
	sortByDate,
	sortByAmount,
	setTextFilter
} from '../../actions/filters';
import moment from 'moment';

test('should set startDate', () => {
	const result = setStartDate(moment(0));
	expect(result).toEqual({
		type: 'SET_START_DATE',
		date: moment(0)
	});
});

test('should set endDate', () => {
	const result = setEndDate(moment(200));
	expect(result).toEqual({
		type: 'SET_END_DATE',
		date: moment(200)
	});
});

test('should sort by date', () => {
	expect(sortByDate()).toEqual({
		type: 'SORT_BY_DATE'
	});
});

test('should sort by amount', () => {
	expect(sortByAmount()).toEqual({
		type: 'SORT_BY_AMOUNT'
	});
});

test('should set text filter with provided value', () => {
	const result = setTextFilter('demo filter');
	expect(result).toEqual({
		type: 'SET_TEXT_FILTER',
		text: 'demo filter'
	});
});

test('should set text filter with default value', () => {
	const result = setTextFilter();
	expect(result).toEqual({
		type: 'SET_TEXT_FILTER',
		text: ''
	});
});
