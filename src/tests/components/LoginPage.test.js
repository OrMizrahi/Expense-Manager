import { shallow } from 'enzyme';
import React from 'react';
import { LoginPage } from '../../components/LoginPage';

test('should render LoginPage', () => {
	const wrapper = shallow(<LoginPage startLogin={() => {}} />);
	expect(wrapper).toMatchSnapshot();
});

test('should activate startLogIn', () => {
	const startLogin = jest.fn();
	const wrapper = shallow(<LoginPage startLogin={startLogin} />);

	wrapper.find('button').simulate('click');
	expect(startLogin).toHaveBeenCalled();
});
