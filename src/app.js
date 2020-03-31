import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';

const store = configureStore();
// store.dispatch(addExpense({ description: 'water bill', amount: 4500 }));
// store.dispatch(addExpense({ description: 'gas bill', createdAt: 1000 }));
// store.dispatch(addExpense({ description: 'rent', amount: 10950 }));

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));
