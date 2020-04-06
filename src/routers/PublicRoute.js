import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({ isLoggedIn, component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			component={(props) =>
				isLoggedIn ? (
					<Redirect to='/dashboard' />
				) : (
					<div>
						<Component {...props} />
					</div>
				)
			}
		/>
	);
};

const mapStateToProps = (state) => ({
	isLoggedIn: state.auth.uid ? true : false,
});

export default connect(mapStateToProps)(PublicRoute);
