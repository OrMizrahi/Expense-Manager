import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseDashboardPage } from '../../components/ExpenseDashboardPage';

test('should render expenseDashboardPage', () => {
	const warpper = shallow(<ExpenseDashboardPage />);
	expect(warpper).toMatchSnapshot();
});
