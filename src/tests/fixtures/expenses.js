import moment from 'moment';

export default [
	{
		id: '1',
		description: 'Coke',
		note: 'yummy',
		amount: 200,
		createdAt: 0
	},
	{
		id: '2',
		description: 'Bamba',
		note: 'Osem',
		amount: 700,
		createdAt: moment(0)
			.subtract(7, 'day')
			.valueOf()
	},
	{
		id: '3',
		description: 'fifa',
		note: 'ea',
		amount: 3000,
		createdAt: moment(0)
			.add(7, 'day')
			.valueOf()
	}
];
