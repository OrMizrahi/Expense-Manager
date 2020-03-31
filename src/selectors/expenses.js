import moment from 'moment';

export default (expenses, { text, sortBy, startDate, endDate }) => {
	return expenses
		.filter(expense => {
			const createdAtMoment = moment(expense.createdAt);
			return (
				expense.description.toLowerCase().includes(text.toLowerCase()) &&
				(startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true) &&
				(endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true)
			);
		})
		.sort((e1, e2) => {
			if (sortBy === 'amount') {
				return e1.amount < e2.amount ? 1 : -1;
			} else if (sortBy === 'date') {
				return e1.createdAt < e2.createdAt ? 1 : -1;
			}
		});
};
